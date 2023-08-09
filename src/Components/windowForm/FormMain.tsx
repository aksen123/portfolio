import React, { useState } from "react";
import up from "../../images/icon/accordionbtn.png";
import down from "../../images/icon/accordionbtnd.png";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { ProjectType,projectData } from "../../data/data";
import Slide from "./Slide";
import IconWrap from "../taskbar/IconWrap";
import { select } from "../../redux/formSlice";
import { selectType } from "./WindowForm";



const FormMain = (selectData:selectType) => {
  // const {selectData} = useSelector((state:RootState) => state.form)
  const dispatch = useDispatch<AppDispatch>();
  const [contentView, setContentView] = useState<boolean>(true);

  const onclick = (id: number, idx:number):void => {
    dispatch(select({id: id, index: idx}))
    console.log(id)
  }
  const contentToggle = ():void => {
    setContentView(!contentView);
  };
  const titleImg = contentView ? up : down;
  const titleBorder = contentView ? "5px 5px 0 0" : "5px 5px 5px 5px";
  // console.log(selectData.project_img)
  return (
    <div className="FormMain-wrap">
      <div className="main-left">
        <div className="accordion-wrap">
          <div
            className="accordion-title"
            style={{
              borderRadius: `${titleBorder}`,
            }}
            onClick={contentToggle}
          >
            <span>프로젝트</span>
            <img src={titleImg} alt="" />
          </div>
          <div className="content-wrapper">
          <div
            className={
              !contentView ? "accordion-content" : "accordion-content on"
            }
          >
            {projectData.map((data) => (
              <IconWrap
                key={`${data.id}`}
                iconImg={data.icon}
                title={data.title}
                classValue="side"
                onClick={()=>onclick(data.id,selectData.idx)}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="content form-title">{selectData.title}</div>
        <div className="content img">
          <Slide project_img={selectData.project_img} />
        </div>
        <div className="content skill">
          {selectData.skill.map((it, idx) => (
            <img src={it} key={`skill${idx}`} />
          ))}
        </div>
        <div className="content desc">
          <ul>
            {selectData.desc.map((it, idx) => (
              <li key={"desc" + idx}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormMain;
