import React from 'react'
import '../../style/main.scss'
import DateWrap from './DateWrap'
import { AppDispatch } from '../../redux/store'
import { toggleStartMenu, hideMenu } from '../../redux/toggleSlice'
import { useDispatch } from 'react-redux'
const TaskBar = () => {

  const dispatch = useDispatch()

  return (
    <div className='Taskbar-wrap'>
      <div 
      className='start-btn'
      onClick={()=>dispatch(toggleStartMenu({value : ''}))}
      >

      </div>
      <div className='taskbar'></div>
      <DateWrap />
    </div>
  )
}

export default TaskBar
