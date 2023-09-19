import React from "react";
import "./windowForm.scss";


const Readme = () => {
  return (
    <div className="Readme">
      <p className="name" style={{ color: "#69cdfb" }}>
        <span className="let">let</span>
        Park
        <span className="white">: </span>
        <span style={{ color: "#49c74d" }}>Developer</span>
        <span className="white"> = {"{"}</span>
      </p>
      <div className="info">
        <p style={{ color: "#69cdfb" }}>
          name <span className="white">:</span>
          <span style={{ color: "#be795c" }}> "박민욱"</span>
          <span className="white">,</span>
        </p>
        <p style={{ color: "#69cdfb" }}>
          age <span className="white">: </span>
          <span style={{ color: "#99ce9b" }}>{ new Date().getFullYear() - 1990}</span>
          <span className="white">,</span>
        </p>
        <p style={{ color: "#69cdfb" }}>
          skills <span className="white">:</span>
          <span style={{ color: "#700e70" }}> {"["}</span>
          <span style={{ color: "#be795c" }}> "HTML"</span>
          <span className="white">,</span>
          <span style={{ color: "#be795c" }}> "CSS"</span>
          <span className="white">,</span>
        </p>
        <p className="skill" style={{ color: "#be795c" }}>
          "Javascript"
          <span className="white">,</span>
          <span style={{ color: "#be795c" }}> "Typescript"</span>
          <span className="white">,</span>
          <span style={{ color: "#be795c" }}> "React"</span>
          <span style={{ color: "#700e70" }}> {"]"}</span>
          <span className="white">, </span>
        </p>
        <p style={{ color: "#69cdfb" }}>
          contact <span className="white">:</span>
          <span style={{ color: "#700e70" }}> {"{"}</span>
        </p>
        <p className="contact" style={{ color: "#69cdfb" }}>
          phone <span className="white">:</span>
          <span style={{ color: "#be795c" }}> "010-8623-2048"</span>
          <span className="white">,</span>
        </p>
        <p className="contact" style={{ color: "#69cdfb" }}>
          email <span className="white">:</span>
          <span style={{ color: "#be795c" }}> "psmhome123@naver.com"</span>
        </p>
        <span style={{ color: "#700e70" }}> {"}"}</span>
      </div>
      <span className="white">{"}"} ;</span>
      <span className="flicker"> |</span>
    </div>
  );
};

export default Readme;
