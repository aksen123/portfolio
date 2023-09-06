import React from 'react'
import Slide from '../windowForm/Slide'
import { gbgImg } from '../../data/projectImg'
type props = {
  onClick: ()=>void
}

const Preview = ({onClick}: props) => {
  return (
    <div className='Preview'>
      <Slide project_img={gbgImg} screenToggle={true}/>
      <button className='close' onClick={onClick}>닫기</button>
    </div>
  )
}

export default Preview
