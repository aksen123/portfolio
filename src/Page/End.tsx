import React,{useEffect} from 'react'
import '../style/startPage.scss'
import Logo from '../Components/logo/Logo'
import { useNavigate } from 'react-router-dom'
import LoadingAnimate from '../Components/logo/LoadingAnimate'
const End = () => {
  const navigate = useNavigate()
  setTimeout(()=>{
    if((document.fullscreenElement !== null)){
      document.exitFullscreen()
    }
    navigate('/contact')
  },2000)
  return (
    <div className='End'>
      <Logo />
      <h1> 종료 하는중 ...</h1>
      <LoadingAnimate />
    </div>
  )
}

export default End
