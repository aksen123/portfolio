import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { clickIcon } from "../../redux/toggleSlice";
type IconProps = {
  iconImg: string;
  title: string;
  classValue: string;
  onClick?: () => void;
};

const IconWrap = ({ iconImg, title, classValue, onClick }: IconProps) => {
  return (
    <div className={`Icon ${classValue}`} onClick={onClick}>
      <img width={40} src={iconImg} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default IconWrap;
