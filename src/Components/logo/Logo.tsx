import React from 'react'
import '../../style/startPage.scss'
import { mainLogo } from '../../data/data'

const Logo = () => {
  return (
    <div className='Logo'>
      <div className="logo-wrap">
      <span>Microsoft</span>
      <img width={150} src={mainLogo} alt="" />
      </div>
      <div className='title-wrap'>
        MINDOWS
        <span className='xp'>xp</span>
      </div>
    </div>
  )
}

export default Logo
