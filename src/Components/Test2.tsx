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
    <div>
      <h1>test</h1>
    </div>
  )
}

export default Test2
