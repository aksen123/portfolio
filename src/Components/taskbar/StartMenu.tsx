import React from 'react'
import '../../style/main.scss'
import IconWrap from './IconWrap'
import img from '../../images/folder.png'
import { useDispatch } from 'react-redux'
import { toggleSubmenu, hideMenu } from '../../redux/toggleSlice'

export const value = {
  img : img,
  title: '아이콘',
  classValue : 'menu',
}


const StartMenu = () => {
  const dispatch = useDispatch()

  const onClick = (): void => {
    alert('아이콘 클릭')
    dispatch(toggleSubmenu())
  }
  return (
    <div className='Start-menu'>
      <div className='menu-box top'>

      </div>
      <div className='icon-wrapper'>
        <div className='icon-wrap left'>
          <IconWrap {...value} menuIconClick={onClick}/>
          <IconWrap {...value} menuIconClick={onClick}/>
        </div>
        <div className='icon-wrap right'></div>
      </div>
      <div className='menu-box bottom'>
        
      </div>
    </div>
  )
}

export default StartMenu
