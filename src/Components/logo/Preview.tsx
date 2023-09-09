import React from 'react'

type props = {
  onClick: ()=>void
}

const Preview = ({onClick}: props) => {
  return (
    <div className='Preview'>
      
      <button className='close' onClick={onClick}>닫기</button>
    </div>
  )
}

export default Preview
