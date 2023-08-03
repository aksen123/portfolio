import React from "react";
import "./windowForm.scss";
import { handle_img } from "../../data/data";

// 컨트롤 버튼 이벤트 넣어주기 
// dispatch 사용  boolean 값으로 주면 될듯 

type HeadType = {
  img: string;
  title: string
}

const FormHead = ({img,title}:HeadType) => {
  return (
    <div className="titleWrap">
      <div className="title">
        <img width={25} src={img} alt="" />
        <span>{title}</span>
      </div>
      <div className="control-buttons">
        <img width={25} src={handle_img.miniSize} alt="최소화" />
        <img width={25} src={handle_img.maxsize} alt="최대화" />
        <img width={25} src={handle_img.close} alt="닫기" />
      </div>
    </div>
  );
};

export default FormHead;
