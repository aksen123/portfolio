import React, { useEffect } from "react";
import "../style/startPage.scss";
import Logo from "../Components/logo/Logo";
import { useNavigate } from "react-router-dom";
import LoadingAnimate from "../Components/logo/LoadingAnimate";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/main", { replace: true });
    }, 2000);
  }, [navigate]);
  return (
    <div className="Loading">
      <div className="loading-wrap">
        <Logo />
        <LoadingAnimate />
      </div>
    </div>
  );
};

export default Loading;
