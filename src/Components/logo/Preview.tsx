import React,{useState} from 'react'
import { mainLogo } from '../../data/data'
type props = {
  onClick: ()=>void
}

const Preview = ({onClick}: props) => {
  const [scaleImg, setScaleImg] = useState(1)
  const click = (num : number)=>{
    setScaleImg(scaleImg + num)
  }
  return (
    <div className='Preview'>
      <img className='test' style={{scale:`${scaleImg}`}} src={mainLogo} alt="" />
      <button onClick={()=>click(0.3)}>+</button>
      <button onClick={()=>click(-0.3)}>-</button>
      <button className='close' onClick={onClick}>닫기</button>
    </div>
  )
}

export default Preview
