import React,{useState} from 'react'
import '../style/main.scss'
import TaskBar from '../Components/taskbar/TaskBar'
import StartMenu from '../Components/taskbar/StartMenu'
import SubMenu from '../Components/taskbar/SubMenu'
import IconWrap from '../Components/taskbar/IconWrap'
import WindowForm from '../Components/windowForm/WindowForm'
import { useSelector,useDispatch } from 'react-redux'
import { RootState,AppDispatch } from '../redux/store'
import img from '../images/folder.png'
import { hideMenu } from '../redux/toggleSlice'





const Main = () => {
  const dispatch = useDispatch<AppDispatch>()



  const StartMenuToggle = useSelector((state: RootState) => state.toggle.startMenuToggle)
  const subMenu = useSelector((state: RootState) => state.toggle.subMenu)

  
  // 더블 클릭시 폴더 띄우기 
  const onDoubleClick = ():void =>{
    alert('더블클릭')
  }

  const mainClick = ():void => {
    dispatch(hideMenu({value : ''}))
  }

  return (
    <div className='Main' >
      <div className='main-screen' onClick={mainClick}>

      </div>
      <WindowForm />
      {subMenu && <SubMenu />}
      {StartMenuToggle && <StartMenu />}
      <TaskBar />


    </div>
  )
}

export default Main
