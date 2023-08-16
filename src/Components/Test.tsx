import React from 'react'
import {useNavigate} from 'react-router-dom';


const Test = () => {
  const navigate = useNavigate() 
  const abc = () => {
    // document.documentElement.requestFullscreen();
    navigate('/test')
    // setTimeout(()=>{
    // },1000)
  }
  return (
    <div>
      <button onClick={abc}>테스트</button>
    </div>
  )
}

export default Test
