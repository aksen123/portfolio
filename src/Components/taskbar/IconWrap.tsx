import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleIcon } from "../../redux/toggleSlice";
type IconProps = {
  img: string;
  title: string;
  classValue: string;
  onClick?: ()=>void
  onDoubleClick?: () => void;
};

const IconWrap = ({
  img,
  title,
  classValue,
  onClick, // start menu icon Click
  onDoubleClick ,

}: IconProps) => {
  const {iconValue} = useSelector((state: RootState)=>state.toggle)
  const dispatch = useDispatch()
  console.log('iconValue :', iconValue)
  
  //descTop icon Click Event
  const iconOnClick = (e:React.MouseEvent<HTMLDivElement>):void => {
    e.stopPropagation()
    dispatch(toggleIcon({value: title}))
  }

  return (
    <div
      className={iconValue === title ? `Icon ${classValue} bg` : `Icon ${classValue}`}
      onClick={onClick || iconOnClick}
      onDoubleClick={onDoubleClick}
    >
      <img width={40} src={img} alt=""/>
      <span >{title}</span>
    </div>
  );
};

export default IconWrap;
