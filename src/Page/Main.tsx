import React from 'react'
import '../style/main.scss'
import TaskBar from '../Components/taskbar/TaskBar'
import StartMenu from '../Components/taskbar/StartMenu'
const Main = () => {
  return (
    <div className='Main'>
      <StartMenu />
      <TaskBar />
    </div>
  )
}

export default Main
