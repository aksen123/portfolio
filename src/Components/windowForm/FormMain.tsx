import React, { useState,useEffect } from "react";
import up from "../../images/icon/accordionbtn.png";
import down from "../../images/icon/accordionbtnd.png";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { ProjectType,projectData } from "../../data/data";
import Slide from "./Slide";
import IconWrap from "../taskbar/IconWrap";
import { select } from "../../redux/formSlice";
import { selectType } from "./WindowForm";



const FormMain = ({id,idx,title,project_img,skill,desc,screenToggle}:selectType) => {
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
  useEffect(()=>{

  },[])
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
              data.id < 4 ?
              <IconWrap
                key={`${data.id}`}
                iconImg={data.icon}
                title={data.title}
                classValue="side"
                onClick={()=>onclick(data.id,idx)}
              />
              : null
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="content form-title">{title}</div>
        <div className={screenToggle ? "content img on" : "content img"}>
          <Slide project_img={project_img} screenToggle={screenToggle} id={id} />
        </div>
        <div className="content skill">
          {skill.map((it, idx) => (
            <img src={it} key={`skill${idx}`} />
          ))}
        </div>
        <div className="content desc">
          <ul>
            {desc.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormMain;
