import React,{useEffect} from 'react'
import '../style/startPage.scss'
import Logo from '../Components/logo/Logo'
import { useNavigate } from 'react-router'
const End = () => {
  const navigate = useNavigate()
  setTimeout(()=>{
    navigate('/contact')
  },2000)
  return (
    <div className='End'>
      <Logo />
      <h2>Mindows 종료 하는중 ...</h2>
    </div>
  )
}

export default End
