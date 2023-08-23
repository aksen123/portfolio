import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { clickIcon } from "../../redux/toggleSlice";
import { Rect } from "../../Page/Main";

type IconProps = {
  iconImg: string;
  title: string;
  onDoubleClick?: () => void;
  rects: ()=> Rect[];
  initX: number;
  initY: number;
};
export type PositionType = {
  x: number | undefined;
  y: number | undefined;
};

const IconDescTop = ({ iconImg, title, onDoubleClick ,rects, initX, initY }: IconProps) => {
  const { iconValue } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch<AppDispatch>();

  const iconOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    dispatch(clickIcon({ value: title }));
  };

  const [originPos, setOriginPos] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);


  const dragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    const originPosition = { ...originPos };
    originPosition.x = e.currentTarget.offsetLeft;
    originPosition.y = e.currentTarget.offsetTop;
    setOriginPos(originPosition);
    iconRef.current?.classList.add("bg");
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };

    const changePosition = rects().find(rect => rect.check(e.clientX, e.clientY))

    if (
      !changePosition
    ) {
      setPosition(originPos);
    } else {
      setPosition({x:changePosition?.x, y:changePosition?.y})
    }
  };
  return (
    <div
      className={iconValue === title ? "Icon descTop bg" : "Icon descTop"}
      draggable="true"
      ref={iconRef}
      onClick={iconOnClick}
      onMouseDown={iconOnClick}
      onDoubleClick={onDoubleClick}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      style={{ left: position.x == 0 ? initX : position.x , top: position.y == 0 ? initY : position.y  }}
    >
      <img width={40} src={iconImg} alt="" />
      <span className={iconValue === title ? title.length > 8 ? "iconTitle" : '' : ''}>{title}</span>
    </div>
  );
};

export default IconDescTop;
