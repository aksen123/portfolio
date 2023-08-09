import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { clickIcon } from "../../redux/toggleSlice";

type IconProps = {
  iconImg: string;
  title: string;
  onDoubleClick?: () => void;
};

const IconDescTop = ({ iconImg, title, onDoubleClick }: IconProps) => {
  const { iconValue } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch<AppDispatch>();

  const iconOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    dispatch(clickIcon({ value: title }));
  };

  return (
    <div className={iconValue === title ? 'Icon descTop bg' : 'Icon descTop'}
      onClick={iconOnClick}
      onDoubleClick={onDoubleClick}
    >
      <img width={40} src={iconImg} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default IconDescTop;
