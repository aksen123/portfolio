import React, { useState } from "react";
import up from "../../images/icon/accordionbtn.png";
import down from "../../images/icon/accordionbtnd.png";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { ProjectType } from "../../data/data";
import Slide from "./Slide";
import IconWrap from "../taskbar/IconWrap";
import { select } from "../../redux/formSlice";
const FormMain = (Props: ProjectType) => {
  const { allData } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const [contentView, setContentView] = useState<boolean>(true);

  const onclick = (id: number):void => {
    dispatch(select({index: id}))
    console.log(id)
  }
  const contentToggle: () => void = () => {
    setContentView(!contentView);
  };
  const titleImg = contentView ? up : down;
  const titleBorder = contentView ? "5px 5px 0 0" : "5px 5px 5px 5px";
  // console.log(Props.project_img)
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
          <div
            className={
              !contentView ? "accordion-content" : "accordion-content on"
            }
          >
            {allData.map((data, i) => (
              <IconWrap
                key={`${data.id}`}
                iconImg={data.icon}
                title={data.title}
                classValue="side"
                onClick={()=>onclick(data.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="content form-title">{Props.title}</div>
        <div className="content img">
          <Slide project_img={Props.project_img} />
        </div>
        <div className="content skill">
          {Props.skill.map((it, idx) => (
            <img src={it} key={`skill${idx}`} />
          ))}
        </div>
        <div className="content desc">
          <ul>
            {Props.desc.map((it, idx) => (
              <li key={"desc" + idx}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormMain;
