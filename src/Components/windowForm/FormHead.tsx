import React from "react";
import "./windowForm.scss";
import { handle_img } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { toggleScreen, hideMenu } from "../../redux/toggleSlice";
import { closeForm } from "../../redux/formSlice";
import { RootState, AppDispatch } from "../../redux/store";

type HeadType = {
  id: number;
  icon: string;
  title: string;
};

const FormHead = ({ id, icon, title }: HeadType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formToggle } = useSelector((state: RootState) => state.toggle);

  const screenToggle = (): void => {
    dispatch(toggleScreen());
    dispatch(hideMenu({ value: "" }));
  };
  const formClose = (id: number): void => {
    dispatch(closeForm({ index: id }));
    console.log(id)
  };
  const resizeImg = formToggle ? handle_img.resize : handle_img.maxsize;

  return (
    <div
      className="titleWrap"
      onClick={() => dispatch(hideMenu({ value: "" }))}
    >
      <div className="title">
        <img width={25} src={icon} alt="" />
        <span>{title}</span>
      </div>
      <div className="control-buttons">
        <img width={25} src={handle_img.miniSize} alt="최소화" />
        <img onClick={screenToggle} width={25} src={resizeImg} alt="최대화" />
        <img width={25} src={handle_img.close} alt="닫기" onClick={()=>formClose(id)}/>
      </div>
    </div>
  );
};

export default FormHead;
