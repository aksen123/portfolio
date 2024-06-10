import React from "react";
import { ProjectType } from "../../data/data";
import "./windowForm.scss";
const Iframe = ({ url }: ProjectType) => {
  return (
    <div className="Iframe">
      <iframe title="프로젝트" src={url} width="100%" height="100%"></iframe>
    </div>
  );
};

export default Iframe;
