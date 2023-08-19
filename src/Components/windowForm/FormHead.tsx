import React,{useRef, useState} from "react";
import "./windowForm.scss";
import { handle_img } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { fullscreen,closeForm, hideForm, activeTab,formPosition } from "../../redux/formSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { selectType } from "./WindowForm";
import { PositionType } from "../taskbar/IconDescTop";


const FormHead = ({
  idx,
  icon,
  title,
  active,
  hide,
}: selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formToggle } = useSelector((state: RootState) => state.toggle);

  const onClickHide = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.stopPropagation();
    dispatch(hideForm({ idx: idx }));
  };
  const screenToggle = (): void => {
    dispatch(fullscreen({ id: idx }));
  };
  const formClose = (id: number): void => {
    dispatch(closeForm({ index: id }));
    console.log("close", id);
  };
  // console.log(id,formArray)
  const resizeImg = formToggle ? handle_img.resize : handle_img.maxsize;
  const testRef = useRef<HTMLDivElement>(null);

  const [originPos, setOriginPos] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const [mouseGap, setMouseGap] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.parentElement?.offsetTop);
    dispatch(activeTab({idx: idx}))
    const mousePosition = { ...mouseGap };
    const parent = e.currentTarget.parentElement
    if(parent !== null) {
      mousePosition.x = e.clientX - parent.offsetLeft ;
      mousePosition.y = e.clientY - parent.offsetTop ;
      setMouseGap(mousePosition);
      const originPosition = { ...originPos };
      originPosition.x = e.currentTarget.offsetLeft;
      originPosition.y = e.currentTarget.offsetTop;
      setOriginPos(originPosition);
    }
  }

  const onDrag = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;
    dispatch(
      formPosition({
        idx: idx,
        x: IconPosition.x,
        y: IconPosition.y,
      })
    );
    setPosition(IconPosition);
    // e.preventDefault()
  };
  const dragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;
    const parent = e.currentTarget.parentElement
    if(parent !== null) {
      if (IconPosition.y - parent.offsetHeight / 2 < 0 ) {
        dispatch(
          formPosition({
            idx: idx,
            x: originPos.x,
            y: 0,
          })
          );
          // setPosition(originPos);
        } else {
          dispatch(
            formPosition({
              idx: idx,
              x: IconPosition.x,
              y: IconPosition.y,
            })
            );
            // setPosition(IconPosition);
          }
        }
    console.log('end : ',e.currentTarget)
  };
  return (
    <div
      className={active ? "titleWrap" : "titleWrap out"}
      onDoubleClick={screenToggle}
      draggable
      onDragStart={dragStart}
      onDrag={onDrag}
      onDragEnd={dragEnd}
    >
      <div className="title">
        <img width={25} src={icon} alt="" />
        <span>{title}</span>
      </div>
      <div className="control-buttons">
        <img
          width={25}
          src={handle_img.miniSize}
          alt="최소화"
          onClick={onClickHide}
        />
        <img onClick={screenToggle} width={25} src={resizeImg} alt="최대화" />
        <img
          width={25}
          src={handle_img.close}
          alt="닫기"
          onClick={(e) => {
            formClose(idx);
            e.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};

export default FormHead;
