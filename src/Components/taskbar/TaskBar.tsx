import React from "react";
import "../../style/main.scss";
import DateWrap from "./DateWrap";
import { AppDispatch, RootState } from "../../redux/store";
import { toggleStartMenu, hideMenu } from "../../redux/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import WindowTab from "../windowForm/WindowTab";
import { mainLogo } from "../../data/data";
const TaskBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { formArray } = useSelector((state: RootState) => state.form);

  const startClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(toggleStartMenu({ value: "" }));
  };

  const taskbarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(hideMenu({ value: "" }));
  };

  return (
    <div className="Taskbar-wrap" onClick={taskbarClick}>
      <div className="start-btn" onClick={startClick}>
      <img width={30} src={mainLogo} alt="" />
      <span>시작</span>
      </div>
      <div className="taskbar">
        {formArray.length > 0 &&
          formArray.map((form, i) => <WindowTab key={i} {...form} idx={i} />)}
      </div>
      <DateWrap />
    </div>
  );
};

export default TaskBar;
