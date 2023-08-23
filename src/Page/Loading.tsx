import React,{useEffect} from 'react'
import '../style/startPage.scss'
import Logo from '../Components/logo/Logo'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/main', {replace: true})
    }, 2000)
  },[])
  return (
    <div className="Loading">
      <div className="loading-wrap">
        <Logo />
        <div className="loading-animate">
          <div className="block-wrap">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading
