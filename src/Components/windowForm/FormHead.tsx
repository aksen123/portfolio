import React,{useRef} from "react";
import "./windowForm.scss";
import { handle_img } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { fullscreen,closeForm, hideForm, activeTab } from "../../redux/formSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { selectType } from "./WindowForm";


const FormHead = ({ idx, icon, title,active, hide }: selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formToggle } = useSelector((state: RootState) => state.toggle);

  const onClickHide = (e:React.MouseEvent<HTMLImageElement>):void => {
    e.stopPropagation()
    dispatch(hideForm({idx : idx}))
  }
  const screenToggle = (): void => {
    dispatch(fullscreen({id: idx}));
  };
  const formClose = (id: number): void => {
    dispatch(closeForm({ index: id }));
    console.log('close',id)
  };
  // console.log(id,formArray)
  const resizeImg = formToggle ? handle_img.resize : handle_img.maxsize;
const testRef = useRef<HTMLDivElement>(null)


  return (
    <div
      className={active ? "titleWrap" : "titleWrap out"}
      ref={testRef}
      onDoubleClick={screenToggle}
    >
      <div className="title">
        <img width={25} src={icon} alt="" />
        <span>{title}</span>
      </div>
      <div className="control-buttons">
        <img width={25} src={handle_img.miniSize} alt="최소화" onClick={onClickHide}/>
        <img onClick={screenToggle} width={25} src={resizeImg} alt="최대화" />
        <img width={25} src={handle_img.close} alt="닫기" onClick={(e)=>{
          formClose(idx)
          e.stopPropagation();
          }}/>
      </div>
    </div>
  );
};

export default FormHead;
