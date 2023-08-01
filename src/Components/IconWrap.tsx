import React from "react";

type IconProps = {
  img: string;
  title: string;
  classValue: string;
  onClick: (str:string) => void;
  onDoubleClick?: () => void;
};

const IconWrap = ({
  img,
  title,
  classValue,
  onClick,
  onDoubleClick = () => {},
}: IconProps) => {
  return (
    <div
      className={`Icon ${classValue}`}
      onClick={()=>onClick(title)}
      onDoubleClick={onDoubleClick}
    >
      <img width={40} src={img} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default IconWrap;