import React,{useState} from 'react'
import  {FaCircleChevronLeft, FaCircleChevronRight}  from "react-icons/fa6";
import { toolbar_img } from '../../data/data';


const Slide = () => {
//슬라이드 clone , 초기 위치, 무한슬라이드 할지 말지 정하기 // 슬라이드 버튼 퍼블리싱 하기
  const [moveImg, setMoveImg] = useState(0);

  const moveSlide = (num: number):void => {
    setMoveImg(moveImg + num)
  }
  return (
    <div className='Slide'>
      <FaCircleChevronLeft  onClick={()=>moveSlide(1)}/>
      <div className='slide-content-wrap'>
        <div className='slide-content' style={{transform: `translateX(${moveImg * 200}px)`}}>
        <img src={toolbar_img.arrow} alt="" />
        <img src={toolbar_img.back} alt="" />
        <img src={toolbar_img.down} alt="" />
        <img src={toolbar_img.folders} alt="" />
        <img src={toolbar_img.arrow} alt="" />
        <img src={toolbar_img.back} alt="" />
        <img src={toolbar_img.down} alt="" />
        <img src={toolbar_img.folders} alt="" />
        <img src={toolbar_img.arrow} alt="" />
        <img src={toolbar_img.back} alt="" />
        <img src={toolbar_img.down} alt="" />
        <img src={toolbar_img.folders} alt="" />
        </div>
      </div>
      <FaCircleChevronRight onClick={()=>moveSlide(-1)}/>
    </div>
  )
}

export default Slide
