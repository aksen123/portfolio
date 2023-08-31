import React from 'react'
import '../../style/main.scss'
import { menu_img, mainLogo } from '../../data/data'
import { useNavigate } from 'react-router-dom'
import { Props } from './StartMenu'

const Logoff = ({logOff}: Props) => {
  const navigate = useNavigate()
  const goEnd =()=>{
    logOff()
    navigate('/end',{replace: true})
    setTimeout(()=>{
    },1000)
  }
  return (
    <div className='Logoff'>
      <div className="off-wrap">
        <div className="top">
          <span>종료 하시겠습니까?</span>
          <img width={50} src={mainLogo} alt="" />
        </div>
        <div className="main" >
          <div className="off" onClick={goEnd}>
          <img width={50} src={menu_img.off} alt="" />
          <span >종료하기</span>
          </div>
        </div>
        <div className="bottom">
          <button onClick={logOff}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default Logoff
