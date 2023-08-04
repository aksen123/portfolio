import React from "react";
import "../../style/main.scss";
import IconWrap from "./IconWrap";
import img from "../../images/folder.png";
import { useDispatch } from "react-redux";
import { toggleSubmenu, hideMenu } from "../../redux/toggleSlice";
import { rightIcon_data, menu_img } from "../../data/data";

const StartMenu = () => {
  const dispatch = useDispatch();

  const onClick = (): void => {
    dispatch(toggleSubmenu({ value: "" }));
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
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default StartMenu;
