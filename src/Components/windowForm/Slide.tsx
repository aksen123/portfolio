import { useState, useRef, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import "./windowForm.scss";
type PropsType = {
  project_img: string[];
  screenToggle: boolean;
  id?: number;
};

const Slide = ({ project_img, screenToggle }: PropsType) => {
  const max_num: number = project_img.length - 1;
  const [moveImg, setMoveImg] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const moveSlide = (num: number): void => {
    if (num > 0 && moveImg === 0) {
      setMoveImg(0);
      console.log(moveImg);
      return;
    } else if (num < 0 && moveImg === -max_num) {
      setMoveImg(-max_num);

      return;
    } else setMoveImg(moveImg + num);
  };
  // useEffect(()=>{
  //   setMoveImg(0)
  // },[id])
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "none";
      setMoveImg(0);
      setTimeout(() => {
        if (slideRef.current) slideRef.current.style.transition = "0.5s";
      }, 500);
    }
  }, [project_img]);
  const width = screenToggle ? 550 : 450;
  return (
    <div className="Slide">
      <FaCircleChevronLeft
        className="slide-btn"
        style={{ color: moveImg === 0 ? "#eee" : "#2561D9" }}
        onClick={() => moveSlide(1)}
      />
      <div className="slide-content-wrap">
        <div
          className="slide-content"
          style={{ transform: `translateX(${moveImg * width}px)` }}
          ref={slideRef}
        >
          {project_img.map((img, i) => (
            <img alt="프로젝트 이미지" src={img} key={`slide${i}`} />
          ))}
        </div>
      </div>
      <FaCircleChevronRight
        className="slide-btn"
        style={{ color: moveImg === -max_num ? "#eee" : "#2561D9" }}
        onClick={() => moveSlide(-1)}
      />
    </div>
  );
};

export default Slide;
