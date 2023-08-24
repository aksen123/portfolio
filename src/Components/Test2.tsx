import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Test2 = () => {
  const navigate = useNavigate() 

  useEffect(()=>{
    setTimeout(()=> {
      navigate('/main', {replace : true})
    },1000)
  },[])
  return (
    <div style={{width:'100%', height:'100%', backgroundColor:'#000'}}>
      <h1>test</h1>
    </div>
  )
}

export default Test2
