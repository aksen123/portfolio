import React, { useState, useRef, useEffect } from "react";
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
import Iframe from "./Iframe";
import TodoForm from "../todoForm/TodoForm";
import Notion from "./Notion";



export type selectType = ProjectType & {
  idx: number;

};
const WindowForm = (selectData: selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const screenWidth = selectData.screenToggle  ? "100%" : "900px";
  const screenHeight = selectData.screenToggle ? "calc(100% - 40px)" : "700px";
  const onClick  =() => {
    dispatch(hideMenu({ value: "" }));
    dispatch(activeTab({idx: selectData.idx}))
  }
  const todoPosition =  {
    width: `${screenWidth}`,
    height: `calc(100% - 40px)`,
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

  const [notionBlockMap, setNotionBlockMap] = useState({});
  useEffect(() => {
      (async () => {
          const notionBlockMap = await (
              await fetch(
                  "https://notion-api.splitbee.io/v1/page/fb52391cfd5847de90fc7980acbf819a?pvs=4"
              )
          ).json();
          setNotionBlockMap(notionBlockMap);
      })();
    }, []);
    console.log(notionBlockMap)

  return (
    <div
      style={selectData.type === "TODO" ? todoPosition : formPosition}
      className={selectData.hide ? "WindowForm hide" : "WindowForm"}
      draggable
      onClick={onClick}
    >
      <FormHead {...selectData} />

      <div className={selectData.active ? "window-body" : "window-body out"}>
        {selectData.type === "WINDOW_FORM" ? <Toolbar {...selectData} /> : null}
        {selectData.type === "WINDOW_FORM" ? (
          <FormMain {...selectData} />
        ) : selectData.type === "TODO" ? (
          <TodoForm {...selectData} />
        ) : (
          <Notion notionBlockMap={notionBlockMap} />
        )}
      </div>
    </div>
  );
};

export default WindowForm;
