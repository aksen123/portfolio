import React from "react";
import "../../style/main.scss";
import IconWrap from "./IconWrap";
import img from "../../images/folder.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { toggleSubmenu, hideMenu } from "../../redux/toggleSlice";
import { openForm } from "../../redux/formSlice";
import { rightIcon_data, menu_img } from "../../data/data";
import { descTopIcon } from "../../data/data";

export interface Props {
  logOff : ()=>void
}

const StartMenu = ({logOff}:Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (id: number): void => {
    dispatch(openForm({ index: id }));
    dispatch(hideMenu({ value: "" }));
  };
  return (
    <div className="Start-menu">
      <div className="menu-box top">
        <IconWrap
          iconImg={menu_img.menuTop}
          title="Portfolio"
          classValue="menu"
          onClick={() => {}}
        />
      </div>
      <div className="icon-wrapper">
        <div className="icon-wrap left">
            <IconWrap 
            title='projects'
              iconImg={descTopIcon.descFolder}
              classValue="menu"
              onClick={()=>onClick(0)}
            />
            <IconWrap 
            title='To Do'
              iconImg={descTopIcon.todo}
              classValue="menu"
              onClick={()=>onClick(4)}
            />
          <div className="all-project">
            <hr className="line" />
            <IconWrap
              title="모든 프로젝트 보기"
              classValue="menu"
              iconImg={menu_img.play}
              onClick={() => dispatch(toggleSubmenu({ value: "" }))}
            />
          </div>
        </div>
        <div className="icon-wrap right">
          {rightIcon_data.map((data) => (
            <IconWrap
              key={data.title}
              {...data}
              classValue="menu"
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
      <div className="menu-box bottom">
        <IconWrap
          iconImg={menu_img.off}
          title="종료(U)"
          classValue="menu"
          onClick={logOff}
        />
      </div>
    </div>
  );
};

export default StartMenu;
