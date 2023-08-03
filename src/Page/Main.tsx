import React,{useState} from 'react'
import '../style/main.scss'
import TaskBar from '../Components/taskbar/TaskBar'
import StartMenu from '../Components/taskbar/StartMenu'
import SubMenu from '../Components/taskbar/SubMenu'
import IconWrap from '../Components/taskbar/IconWrap'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import img from '../images/folder.png'
import { hideMenu } from '../redux/toggleSlice'



const test = ['123','234','345','456','123','234','345','456','123','234','345','456','123','234','345','456']


const Main = () => {
  const dispatch = useDispatch()

  const value = {
    img : img,
    // title: '바탕화면',
    classValue : 'descTop',
    // onClick : (str:string)=> alert(str),
    setBackground : (value: React.SetStateAction<string>) => {}
  }

  const StartMenuToggle = useSelector((state: RootState) => state.toggle.startMenuToggle)
  const subMenu = useSelector((state: RootState) => state.toggle.subMenu)
  console.log(subMenu)
  
  // 클릭시 백그라운드 컬러 변경

  // 더블 클릭시 폴더 띄우기 
  const onDoubleClick = ():void =>{
    alert('더블클릭')
  }
  // 왜 안됨 ..?
  const mainClick = ():void => {
    // console.log(e.target)
    dispatch(hideMenu({value : ''}))
  }
  return (
    <div className='Main' >
      <span className='test1' onClick={mainClick}>
      {test.map((it,idx)=> <IconWrap {...value} title={it} key={it+idx} onDoubleClick={onDoubleClick}/>)}
      </span>

      {subMenu && <SubMenu />}
      {StartMenuToggle && <StartMenu />}
      <TaskBar />


    </div>
  )
}

export default Main
