import React from "react";
import { toolbar_img, ProjectType } from "../../data/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { openProject } from "../../redux/formSlice";
const menuTitle: string[] = [
  "파일(F)",
  "편집(E)",
  "보기(V)",
  "즐겨찾기(A)",
  "도구(T)",
  "도움말(H)",
];

const Toolbar = ({ url, icon, type, id }: ProjectType) => {
  const dispatch =useDispatch<AppDispatch>()
  const onClick = (id : number) => {
    dispatch(openProject({id: id}))
  }

  return (
    <div className="Toolbar">
      <div className="top">
        <div className="menus">
          {menuTitle.map((title) => (
            <span key={title}>{title}</span>
          ))}
        </div>
        <img src={toolbar_img.windowLogo} alt="" />
      </div>
      <div className="bottom">
        <div className="back-forward">
          <img width={35} src={toolbar_img.back} alt="back" />
          <span>뒤로</span>
          <img
            className="arrow"
            width={7}
            src={toolbar_img.arrow}
            alt="arrow"
          />
        </div>
        <div className="back-forward">
          <img width={35} src={toolbar_img.forward} alt="forward" />
          <img
            className="arrow"
            width={7}
            src={toolbar_img.arrow}
            alt="arrow"
          />
        </div>
        <img
          className="folder"
          width={30}
          src={toolbar_img.folder}
          alt="folder"
        />
        <div className="search-folder">
          <img width={30} src={toolbar_img.search} alt="" />
          <span>검색</span>
          <img
            className="folders"
            width={30}
            src={toolbar_img.folders}
            alt=""
          />
          <span>폴더</span>
        </div>
        <img width={30} src={toolbar_img.thumbnail} alt="thumbnail" />
        <img className="arrow" width={7} src={toolbar_img.arrow} alt="arrow" />
      </div>
      <div className="search">
        <div className="search-address">주소(D)</div>
        <div className="search-bar">
          <div className="search-text">
            <img width={15} src={icon} alt="" />
            {url}
          </div>
          <img className="down-img" src={toolbar_img.down} alt="" />
        </div>
        {/* onClick > go-button 추가하기 */}

        <div className="go-button" onClick={(e :React.MouseEvent<HTMLDivElement>)=>{onClick(id); e.stopPropagation()}}>
          <img src={toolbar_img.go} alt="" />
          <span>이동</span>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
