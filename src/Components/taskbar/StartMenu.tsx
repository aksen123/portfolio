import React from 'react'
import '../../style/main.scss'
import IconWrap from './IconWrap'
import img from '../../images/folder.png'
import { useDispatch } from 'react-redux'
import { toggleSubmenu, hideMenu } from '../../redux/toggleSlice'

export const value = {
  img : img,
  title: '123 ',
  classValue : 'menu',
}


const StartMenu = () => {
  const dispatch = useDispatch()

  const onClick = (): void => {
    dispatch(toggleSubmenu({value : ''}))
  }
  return (
    <div className='Start-menu'>
      <div className='menu-box top'>

      </div>
      <div className='icon-wrapper'>
        <div className='icon-wrap left'>
          <IconWrap {...value} onClick={onClick}/>
          <IconWrap {...value} onClick={onClick}/>
        </div>
        <div className='icon-wrap right'></div>
      </div>
      <div className='menu-box bottom'>
        
      </div>
    </div>
  )
}

export default StartMenu
