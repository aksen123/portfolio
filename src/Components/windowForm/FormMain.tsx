import React, { useState } from "react";
import up from "../../images/icon/accordionbtn.png";
import down from "../../images/icon/accordionbtnd.png";

const FormMain = () => {
  const [contentView, setContentView] = useState<boolean>(true);
  const contentToggle: () => void = () => {
    setContentView(!contentView);
  };
  const titleImg = contentView ? up : down;
  const titleBorder = contentView ? "5px 5px 0 0" : "5px 5px 5px 5px";
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
            <img  src={titleImg} alt="" />
          </div>
          <div
            className={
              !contentView ? "accordion-content" : "accordion-content on"
            }
          >
          content
          </div>
        </div>
      </div>
      <div className="main-right">
        <div>title</div>
        <div>img</div>
        <div>language</div>
        <div>desc</div>
      </div>
    </div>
  );
};

export default FormMain;
