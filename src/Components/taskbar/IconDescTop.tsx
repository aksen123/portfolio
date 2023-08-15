import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { clickIcon } from "../../redux/toggleSlice";

type IconProps = {
  iconImg: string;
  title: string;
  onDoubleClick?: () => void;
};
export type PositionType = {
  x: number;
  y: number;
};
class Rect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  public check(x: number, y: number): boolean {
    return (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height
    );
  }
}
const IconDescTop = ({ iconImg, title, onDoubleClick }: IconProps) => {
  const { iconValue } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch<AppDispatch>();

  const iconOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    dispatch(clickIcon({ value: title }));
  };

  const [originPos, setOriginPos] = useState<PositionType>({ x: 0, y: 0 });
  const [mouseGap, setMouseGap] = useState<PositionType>({ x: 0, y: 0 });
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);
  let rects: any[] = [];
  useEffect(() => {
    let test = Math.floor(window.innerWidth / 70);
    let test2 = Math.floor((window.innerHeight - 40) / 70);

    for (let i = 0; i < test; i++) {
      for (let j = 0; j < test2; j++) {
        rects = [...rects, new Rect(i * 70, j * 70, 70, 70)];
      }
    }
  }, [originPos]);
  console.log(rects);
  const dragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    const mousePosition = { ...mouseGap };
    mousePosition.x = e.clientX - e.currentTarget.offsetLeft;
    mousePosition.y = e.clientY - e.currentTarget.offsetTop;
    setMouseGap(mousePosition);
    const originPosition = { ...originPos };
    originPosition.x = e.currentTarget.offsetLeft;
    originPosition.y = e.currentTarget.offsetTop;
    setOriginPos(originPosition);
    iconRef.current?.classList.add("bg");
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    const IconPosition = { ...position };
    IconPosition.x = e.clientX - mouseGap.x;
    IconPosition.y = e.clientY - mouseGap.y;

    const changePosition: Rect = rects.find(rect => rect.check(e.clientX, e.clientY))

    
    if (
      e.clientX - mouseGap.x < 0 ||
      e.clientY - mouseGap.y < 0 ||
      e.clientX + mouseGap.x > window.innerWidth ||
      e.clientY + mouseGap.y > window.innerHeight - 40
    ) {
      setPosition(originPos);
    } else {
      setPosition({x:changePosition.x, y:changePosition.y})
    }
  };
  return (
    <div
      className={iconValue === title ? "Icon descTop bg" : "Icon descTop"}
      draggable="true"
      ref={iconRef}
      onClick={iconOnClick}
      onDoubleClick={onDoubleClick}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      style={{ left: position.x, top: position.y }}
    >
      <img width={40} src={iconImg} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default IconDescTop;
