import React, { useState, useEffect, useRef } from "react";
import "../style/main.scss";
import TaskBar from "../Components/taskbar/TaskBar";
import StartMenu from "../Components/taskbar/StartMenu";
import SubMenu from "../Components/taskbar/SubMenu";
import IconDescTop from "../Components/taskbar/IconDescTop";
import WindowForm from "../Components/windowForm/WindowForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { hideMenu } from "../redux/toggleSlice";
import { projectData, toolbar_img } from "../data/data";
import { openForm } from "../redux/formSlice";
import Test3 from "../Components/Test3";
const Main = () => {
  const testRef = useRef<any>(null);

  const dispatch = useDispatch<AppDispatch>();

  const { formArray } = useSelector((state: RootState) => state.form);
  const { startMenuToggle, subMenu } = useSelector(
    (state: RootState) => state.toggle
  );

  // 더블 클릭시 폴더 띄우기
  const onDoubleClick = (id: number): void => {
    dispatch(openForm({ index: id }));
  };
  useEffect(() => {
  }, []);
  const mainClick = (): void => {
    dispatch(hideMenu({ value: "" }));
    const remove = document.querySelectorAll(".Icon");
    remove.forEach((it) => it.classList.remove("bg"));
  };

  return (
    <div className="Main" ref={testRef}>
      <div className="main-screen" onClick={mainClick}>
        <IconDescTop
          title={"test1"}
          iconImg={toolbar_img.folder}
          onDoubleClick={() => onDoubleClick(1)}
        />
        <IconDescTop
          title={"test1"}
          iconImg={toolbar_img.folder}
          onDoubleClick={() => onDoubleClick(1)}
        />
        <IconDescTop
          title={"test1"}
          iconImg={toolbar_img.folder}
          onDoubleClick={() => onDoubleClick(1)}
        />
      </div>
      
      {formArray.length > 0 &&
        formArray.map((form, i) => <WindowForm key={i} {...form} idx={i} />)}
      {subMenu && <SubMenu />}
      {startMenuToggle && <StartMenu />}
      <TaskBar />
    </div>
  );
};

export default Main;
