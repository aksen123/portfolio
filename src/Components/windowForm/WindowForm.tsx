import React, { useState, useRef } from "react";
import FormHead from "./FormHead";
import Toolbar from "./Toolbar";
import FormMain from "./FormMain";
import "./windowForm.scss";
import { ProjectType } from "../../data/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { hideMenu } from "../../redux/toggleSlice";
import { PositionType } from "../taskbar/IconDescTop";
import { formPosition, activeTab } from "../../redux/formSlice";
export type selectType = ProjectType & {
  idx: number;
};
const WindowForm = (selectData: selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formToggle } = useSelector((state: RootState) => state.toggle);

  const screenWidth = selectData.fullscreen ? "100%" : "800px";
  const screenHeight = selectData.fullscreen ? "calc(100% - 40px)" : "650px";

  const [originPos, setOriginPos] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const [mouseGap, setMouseGap] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

  const dragStart = (e: React.DragEvent<HTMLDivElement>): void => {

    const mousePosition = { ...mouseGap };
    mousePosition.x = e.clientX -e.currentTarget.offsetLeft ;
    mousePosition.y = e.clientY - e.currentTarget.offsetTop ;
    setMouseGap(mousePosition);
    const originPosition = { ...originPos };
    originPosition.x = e.currentTarget.offsetLeft;
    originPosition.y = e.currentTarget.offsetTop;
    setOriginPos(originPosition);

  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;
    dispatch(
      formPosition({
        idx: selectData.idx,
        x: IconPosition.x,
        y: IconPosition.y,
      })
    );
    setPosition(IconPosition);
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;
    console.log({...IconPosition, y:0})
    if (IconPosition.y - e.currentTarget.offsetHeight / 2 < 0 ) {
      dispatch(
        formPosition({
          idx: selectData.idx,
          x: originPos.x,
          y: originPos.y,
        })
      );
      // setPosition(originPos);
    } else {
      dispatch(
        formPosition({
          idx: selectData.idx,
          x: IconPosition.x,
          y: IconPosition.y,
        })
      );
      // setPosition(IconPosition);
    }
  };
  const onClick  =() => {
    dispatch(hideMenu({ value: "" }));
    dispatch(activeTab({idx: selectData.idx}))
  }
  return (
    <div
      style={{
        width: `${screenWidth}`,
        height: `${screenHeight}`,
        zIndex: selectData.zIndex,
        left: selectData.fullscreen
          ? 0
          : selectData.position.x == 0
          ? "50%"
          : selectData.position.x,
        top: selectData.fullscreen
          ? 0
          : selectData.position.y == 0
          ? "50%"
          : selectData.position.y,
        transform: selectData.fullscreen
          ? "translate(0,0)"
          : "translate(-50%,-50%)",
      }}
      className={selectData.hide ?"WindowForm hide" : "WindowForm"}
      draggable
      onDragStart={dragStart}
      onDrag={onDrag}
      onDragEnd={dragEnd}
      onClick={onClick}
    >
      <FormHead
      {...selectData}
      />
      <div className={selectData.active ?"window-body" :"window-body out" }>
        <Toolbar url={selectData.url} icon={selectData.icon} />
        <FormMain {...selectData} />
      </div>
    </div>
  );
};

export default WindowForm;
