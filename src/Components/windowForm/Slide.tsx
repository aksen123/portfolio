import React, { useState, useRef, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { toolbar_img } from "../../data/data";

const Slide = () => {
  const [moveImg, setMoveImg] = useState<number>(0);
  const moveSlide = (num: number): void => {
    if (num > 0 && moveImg === 0) {
      setMoveImg(0);
      console.log(moveImg);
      return;
    }
    if (num < 0 && moveImg === -3) {
      setMoveImg(-3);
      console.log(moveImg);
      return;
    } else setMoveImg(moveImg + num);
  };
  console.log(moveImg);
  return (
    <div className="Slide">
      <FaCircleChevronLeft 
      className="slide-btn" 
      style={{color: moveImg === 0 ? '#eee' : '#2561D9'}}
      onClick={() => moveSlide(1)} />
      <div className="slide-content-wrap">
        <div
          className="slide-content"
          style={{ transform: `translateX(${moveImg * 250}px)` }}
        >
          <img src={toolbar_img.arrow} alt="" />
          <img src={toolbar_img.back} alt="" />
          <img src={toolbar_img.folders} alt="" />
          <img src={toolbar_img.arrow} alt="" />
        </div>
      </div>
      <FaCircleChevronRight
        className="slide-btn"
        style={{ color: moveImg === -3 ? "#eee" : "#2561D9" }}
        onClick={() => moveSlide(-1)}
      />
    </div>
  );
};

export default Slide;
