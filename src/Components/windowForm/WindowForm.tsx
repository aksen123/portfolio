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
import { activeTab } from "../../redux/formSlice";
import Test3 from "../Test3";
import TodoForm from "../todoForm/TodoForm";

export type selectType = ProjectType & {
  idx: number;

};
const WindowForm = (selectData: selectType) => {
  const dispatch = useDispatch<AppDispatch>();

  const screenWidth = selectData.screenToggle ? "100%" : "800px";
  const screenHeight = selectData.screenToggle ? "calc(100% - 40px)" : "650px";

 
  const onClick  =() => {
    dispatch(hideMenu({ value: "" }));
    dispatch(activeTab({idx: selectData.idx}))
    console.log('form')
  }
  const todoPosition =  {
    width: `${screenWidth}`,
    height: `100%`,
    zIndex: selectData.zIndex,
    right:0,
    top: 0,
  } 
  const formPosition = {
    width: `${screenWidth}`,
    height: `${screenHeight}`,
    zIndex: selectData.zIndex,
    left: selectData.screenToggle
      ? 0
      : selectData.position.x == 0
      ? "50%"
      : selectData.position.x,
    top: selectData.screenToggle
      ? 0
      : selectData.position.y == 0
      ? "50%"
      : selectData.position.y,
    transform: selectData.screenToggle
      ? "translate(0,0)"
      : "translate(-50%,-50%)",
  }
  return (
    <div
      style={selectData.type ==='TODO' ? todoPosition : formPosition}
      className={selectData.hide ? "WindowForm hide" : "WindowForm"}
      draggable
      onClick={onClick}
    >
      <FormHead
        {...selectData}
      />
      <div className={selectData.active ? "window-body" : "window-body out"}>
        
        {selectData.type === "WINDOW_FORM" ? <Toolbar {...selectData} /> : null}
        {selectData.type === "WINDOW_FORM" ? <FormMain {...selectData} /> :selectData.type === "TODO" ? <TodoForm {...selectData}/> : <Test3 />}
      </div>
    </div>
  );
};

export default WindowForm;
