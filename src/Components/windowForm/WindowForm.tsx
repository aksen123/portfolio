import React, { useState, useRef } from "react";
import FormHead from "./FormHead";
import Toolbar from "./Toolbar";
import FormMain from "./FormMain";
import "./windowForm.scss";
import { ProjectType } from "../../data/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { hideMenu } from "../../redux/toggleSlice";
import { PositionType } from "../taskbar/IconDescTop";
import { formPosition, activeTab } from "../../redux/formSlice";
import Test3 from "../Test3";

export type selectType = ProjectType & {
  idx: number;
};
const WindowForm = (selectData: selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formToggle } = useSelector((state: RootState) => state.toggle);

  const screenWidth = selectData.fullscreen ? "100%" : "800px";
  const screenHeight = selectData.fullscreen ? "calc(100% - 40px)" : "650px";

 
  const onClick  =() => {
    dispatch(hideMenu({ value: "" }));
    dispatch(activeTab({idx: selectData.idx}))
    console.log('form')
  }
  return (
    <div
      style={{
        width: `${screenWidth}`,
        height: `${screenHeight}`,
        zIndex: selectData.zIndex,
        left: selectData.fullscreen
          ? 0
          : selectData.position.x == 0
          ? "50%"
          : selectData.position.x,
        top: selectData.fullscreen
          ? 0
          : selectData.position.y == 0
          ? "50%"
          : selectData.position.y,
        transform: selectData.fullscreen
          ? "translate(0,0)"
          : "translate(-50%,-50%)",
      }}
      className={selectData.hide ? "WindowForm hide" : "WindowForm"}
      draggable
      onClick={onClick}
    >
      <FormHead
        {...selectData}
      />
      <div className={selectData.active ? "window-body" : "window-body out"}>
        <Toolbar {...selectData} />
        <FormMain {...selectData} />
        {/* <Test3 /> */}
      </div>
    </div>
  );
};

export default WindowForm;
