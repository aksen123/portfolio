import React,{useState,useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { clickIcon } from "../../redux/toggleSlice";

type IconProps = {
  iconImg: string;
  title: string;
  onDoubleClick?: () => void;
};
type PositionType = {
  x: number;
  y: number;
};
const IconDescTop = ({ iconImg, title, onDoubleClick }: IconProps) => {
  const { iconValue } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch<AppDispatch>();

  const iconOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    dispatch(clickIcon({ value: title }));
  };

  const [originPos, setOriginPos] = useState<PositionType>({x:0, y:0})
  const [mouseGap, setMouseGap] = useState<PositionType>({x:0, y:0})
  const [position, setPosition] = useState<PositionType>({x:0, y:0})
  const iconRef = useRef<HTMLDivElement>(null)


  const dragStart = (e: React.DragEvent<HTMLDivElement>):void => {
    const mousePosition = {...mouseGap}
    mousePosition.x = e.clientX - e.currentTarget.offsetLeft;
    mousePosition.y = e.clientY - e.currentTarget.offsetTop;
    setMouseGap(mousePosition)
    const originPosition = {...originPos}
    originPosition.x = e.currentTarget.offsetLeft;
    originPosition.y = e.currentTarget.offsetTop;
    setOriginPos(originPosition)
    iconRef.current?.classList.add('bg')
  }
  const onDrag = (e: React.DragEvent<HTMLDivElement>):void=> {
  }
  const dragEnd = (e: React.DragEvent<HTMLDivElement>):void => {
    const IconPosition = {...position}
  IconPosition.x = e.clientX - mouseGap.x    
  IconPosition.y = e.clientY - mouseGap.y    
    setPosition(IconPosition)
    // iconRef.current?.classList.remove('bg')
  }
  return (
    <div className={iconValue === title ? 'Icon descTop bg' : 'Icon descTop'}
      draggable='true'
      ref={iconRef}
      onClick={iconOnClick}
      onDoubleClick={onDoubleClick}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      style={{left: position.x, top: position.y}}
    >
      <img width={40} src={iconImg} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default IconDescTop;
