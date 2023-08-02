import React from "react";

type IconProps = {
  img: string;
  title: string;
  classValue: string;
  onClick?: (e:React.MouseEvent<HTMLDivElement>,str:string) => void 
  menuIconClick? : ()=>void
  onDoubleClick?: () => void;
  bg?: string
};

const IconWrap = ({
  img,
  title,
  classValue,
  onClick,
  onDoubleClick,
  menuIconClick,
  bg
}: IconProps) => {
  return (
    <div
      className={bg === title ? `Icon ${classValue} bg` : `Icon ${classValue}`}
      onClick={()=> (bg != undefined) ? onClick : menuIconClick}
      onDoubleClick={onDoubleClick}
    >
      <img width={40} src={img} alt=""/>
      <span >{title}</span>
    </div>
  );
};

export default IconWrap;
