import React,{useState} from 'react'
import '../style/main.scss'
import TaskBar from '../Components/taskbar/TaskBar'
import StartMenu from '../Components/taskbar/StartMenu'
import SubMenu from '../Components/taskbar/SubMenu'
import IconWrap from '../Components/taskbar/IconWrap'
import WindowForm from '../Components/windowForm/WindowForm'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import img from '../images/folder.png'
import { hideMenu } from '../redux/toggleSlice'



const test = ['123','234','345','456']


const Main = () => {
  const dispatch = useDispatch()

  const value = {
    img : img,
    // title: '바탕화면',
    classValue : 'descTop',
    // onClick : (str:string)=> alert(str),

  }

  const StartMenuToggle = useSelector((state: RootState) => state.toggle.startMenuToggle)
  const subMenu = useSelector((state: RootState) => state.toggle.subMenu)
  console.log(subMenu)
  
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
      {test.map((it,idx)=> <IconWrap {...value} title={it} key={it+idx} onDoubleClick={onDoubleClick}/>)}
      </div>
      <WindowForm />
      {subMenu && <SubMenu />}
      {StartMenuToggle && <StartMenu />}
      <TaskBar />


    </div>
  )
}

export default Main
