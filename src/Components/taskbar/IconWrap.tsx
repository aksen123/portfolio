import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../../redux/store";
import { clickIcon } from "../../redux/toggleSlice";
type IconProps = {
  iconImg: string;
  title: string;
  classValue: string;
  onClick?: ()=>void
  onDoubleClick?: () => void;
};

const IconWrap = ({
  iconImg,
  title,
  classValue,
  onClick, // start menu icon Click
  onDoubleClick ,

}: IconProps) => {
  const {iconValue} = useSelector((state: RootState)=>state.toggle)
  const dispatch = useDispatch<AppDispatch>()
  // console.log('iconValue :', iconValue)
  
  //descTop icon Click Event
  const iconOnClick = (e:React.MouseEvent<HTMLDivElement>):void => {
    e.stopPropagation()
    dispatch(clickIcon({value: title}))
  }

  return (
    <div
      className={iconValue === title ? `Icon ${classValue} bg` : `Icon ${classValue}`}
      onClick={onClick || iconOnClick}
      onDoubleClick={onDoubleClick}
    >
      <img width={40} src={iconImg} alt=""/>
      <span >{title}</span>
    </div>
  );
};

export default IconWrap;
