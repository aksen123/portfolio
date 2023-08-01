import React from 'react'
import '../style/main.scss'
import DateWrap from './DateWrap'
const TaskBar = () => {
  return (
    <div className='Taskbar-wrap'>
      <div className='start-btn'></div>
      <div className='taskbar'></div>
      <DateWrap />
    </div>
  )
}

export default TaskBar
