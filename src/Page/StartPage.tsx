import React, { useState } from "react";
import "../style/startPage.scss";
import github from "../images/icon/git.png";
import start from "../images/startImg.png";
import Logo from "../Components/logo/Logo";
import { useNavigate } from "react-router-dom";
import Preview from "../Components/logo/Preview";

const StartPage = () => {
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate();
  const goMain = (): void => {
    document.documentElement.requestFullscreen();
    setTimeout(() => {
      navigate("/loading", { replace: true });
    }, 1000);
  };
  const togglePreview = () => {
    setPreview(!preview);
  };
  return (
    <div className="StartPage">
      <div className="pageTop"></div>
      <div className="pageMain">
        <div className="left">
          <Logo />
          <p>시작하시려면 시작 버튼을 눌러주세요</p>
        </div>
        <div className="right">
          <a
            href="https://github.com/aksen123/portfolio"
            target="_blank"
            rel="noreferrer"
            className="linkWrap"
          >
            <img width={80} src={github} alt="" />
            <span>깃허브</span>
          </a>
          <div className="linkWrap" onClick={goMain}>
            <img width={80} src={start} alt="" />
            <span>시작</span>
          </div>
        </div>
      </div>
      <div className="pageBottom"></div>
      {preview && <Preview onClick={togglePreview} />}
    </div>
  );
};

export default StartPage;
