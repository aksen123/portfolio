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

export type selectType = ProjectType & {
  idx: number;
};

const WindowForm = (selectData: selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formToggle } = useSelector((state: RootState) => state.toggle);
  const screenWidth = formToggle ? "100%" : "800px";
  const screenHeight = formToggle ? "100%" : "650px";

  const [originPos, setOriginPos] = useState<PositionType>({ x: 0, y: 0 });
  const [mouseGap, setMouseGap] = useState<PositionType>({ x: 0, y: 0 });
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

  const dragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    // e.currentTarget.style.transform = 'translate(0, 0)'

    const mousePosition = { ...mouseGap };
    mousePosition.x = e.clientX -e.currentTarget.offsetLeft ;
    mousePosition.y = e.clientY - e.currentTarget.offsetTop ;
    setMouseGap(mousePosition);
    const originPosition = { ...originPos };
    originPosition.x = e.currentTarget.offsetLeft;
    originPosition.y = e.currentTarget.offsetTop;
    setOriginPos(originPosition);

    console.log("start", mousePosition);
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;

    setPosition(IconPosition);
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;
    console.log({...IconPosition, y:0})
    if (IconPosition.y - e.currentTarget.offsetHeight / 2 < 0) {
      setPosition(originPos);
    } else {
      setPosition(IconPosition);
    }
  };

  return (
    <div
      style={{
        width: `${screenWidth}`,
        height: `${screenHeight}`,
        left: position.x === 0 ? "50%" : position.x,
        top: position.y === 0 ? "50%" : position.y,
      }}
      className="WindowForm"
      draggable
      onDragStart={dragStart}
      onDrag={onDrag}
      onDragEnd={dragEnd}
      onClick={() => {
        dispatch(hideMenu({ value: "" }));
      }}
    >
      <div className="testForm">|</div>
      <FormHead
        id={selectData.idx}
        icon={selectData.icon}
        title={selectData.title}
      />
      <div className="window-body">
        <Toolbar url={selectData.url} icon={selectData.icon} />
        <FormMain {...selectData} />
      </div>
    </div>
  );
};

export default WindowForm;
