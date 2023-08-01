import React from 'react'
import '../style/main.scss'
import TaskBar from '../Components/TaskBar'
import StartMenu from '../Components/StartMenu'

const Main = () => {
  return (
    <div className='Main'>
      <StartMenu />
      <TaskBar />
    </div>
  )
}

export default Main
