import React from "react";
import "./windowForm.scss";
import { handle_img } from "../../data/data";
import { useDispatch,useSelector } from "react-redux";
import { toggleScreen,hideMenu } from "../../redux/toggleSlice";
import { RootState } from "../../redux/store";

type HeadType = {
  img: string;
  title: string
}

const FormHead = ({img,title}:HeadType) => {
  const dispatch =useDispatch();
  const {formToggle} = useSelector((state:RootState)=> state.toggle)
  const screenToggle = ():void => {
    dispatch(toggleScreen())
    dispatch(hideMenu({value:''}))
  }
  const resizeImg = formToggle ? handle_img.resize : handle_img.maxsize
  return (
    <div className="titleWrap" onClick={()=>dispatch(hideMenu({value:''}))}>
      <div className="title">
        <img width={25} src={img} alt="" />
        <span>{title}</span>
      </div>
      <div className="control-buttons">
        <img width={25} src={handle_img.miniSize} alt="최소화" />
        <img onClick={screenToggle} width={25} src={resizeImg} alt="최대화" />
        <img width={25} src={handle_img.close} alt="닫기" />
      </div>
    </div>
  );
};

export default FormHead;
