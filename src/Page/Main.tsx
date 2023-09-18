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
import { openForm } from "../redux/formSlice";
import { mainIcons } from "../data/data";
import { descTopIcon } from "../data/data";
import Logoff from "../Components/taskbar/Logoff";
import { setToDos } from '../redux/todoSlice'

export class Rect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  public check(x: number, y: number): boolean {
    return (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height
    );
  }
}

const Main = () => {
  const [end, setEnd] = useState(false)
  const testRef = useRef<any>(null);

  const dispatch = useDispatch<AppDispatch>();

  const { formArray } = useSelector((state: RootState) => state.form);
  const { startMenuToggle, subMenu } = useSelector(
    (state: RootState) => state.toggle
  );


  // 더블 클릭시 폴더 띄우기
  const onDoubleClick = (id: number): void => {
    dispatch(openForm({ index: id }));
    dispatch(hideMenu({ value: "" }));
  };
  const rects = (): Rect[] => {
    let rects: Rect[] = [];
    let width = Math.floor(window.innerWidth / 70);
    let height = Math.floor((window.innerHeight - 40) / 70);

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        rects = [...rects, new Rect(i * 70, j * 70, 70, 70)];
      }
    }
    return rects;
  };
  const mainClick = (): void => {
    dispatch(hideMenu({ value: "" }));
    const remove = document.querySelectorAll(".Icon");
    remove.forEach((it) => it.classList.remove("bg"));
  };
  const logOff = ():void => {
    setEnd(!end)
  }
  useEffect(()=>{
    dispatch(setToDos())
  },[])
  
  return (
    <div className="Main" ref={testRef}>
      <div className="main-screen" onClick={mainClick}>
        {mainIcons.map((data, i) => (
          <IconDescTop
            key={i}
            title={data.title}
            iconImg={data.icon}
            // onDoubleClick={() => onDoubleClick(data.id)}
            rects={() => rects()}
            initX={rects()[i].x}
            initY={rects()[i].y}
          />
        ))}
        <IconDescTop
          title="README"
          iconImg={descTopIcon.vscode}
          rects={() => rects()}
          initX={rects()[3].x}
          initY={rects()[3].y}
          onDoubleClick={() => onDoubleClick(5)}
        />
        <IconDescTop
          title="Projects"
          iconImg={descTopIcon.descFolder}
          rects={() => rects()}
          initX={rects()[4].x}
          initY={rects()[4].y}
          onDoubleClick={() => onDoubleClick(0)}
        />
        <IconDescTop
          title="To Do"
          iconImg={descTopIcon.todo}
          rects={() => rects()}
          initX={rects()[5].x}
          initY={rects()[5].y}
          onDoubleClick={() => onDoubleClick(4)}
        />
        {/* <IconDescTop
          title="Lotto"
          iconImg={descTopIcon.todo}
          rects={() => rects()}
          initX={rects()[6].x}
          initY={rects()[6].y}
          onDoubleClick={() => onDoubleClick(6)}
        /> */}
      </div>

      {formArray.length > 0 &&
        formArray.map((form, i) => <WindowForm key={i} {...form} idx={i} />)}
      {subMenu && <SubMenu />}
      {startMenuToggle && <StartMenu logOff={logOff} />}
      <TaskBar />
       {end && <Logoff logOff={logOff} />}
    </div>
  );
};

export default Main;
