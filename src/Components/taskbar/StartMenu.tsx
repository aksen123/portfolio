import React from 'react'
import '../style/main.scss'
import IconWrap from './IconWrap'
import img from '../images/folder.png'

const value = {
  img : img,
  title: '아이콘',
  classValue : 'menu',
  onClick : (str:string)=> alert(str),
}

const StartMenu = () => {
  return (
    <div className='Start-menu'>
      <div className='menu-box top'>

      </div>
      <div className='icon-wrap'>
        <div className='icon-wrap-left'>
          <IconWrap {...value} />
        </div>
        <div className='icon--wrap-right'></div>
      </div>
      <div className='menu-box bottom'>
        
      </div>
    </div>
  )
}

export default StartMenu
