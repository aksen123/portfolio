import React,{useState} from 'react'
import '../style/main.scss'
import TaskBar from '../Components/taskbar/TaskBar'
import StartMenu from '../Components/taskbar/StartMenu'
import SubMenu from '../Components/taskbar/SubMenu'
import IconDescTop from '../Components/taskbar/IconDescTop'
import WindowForm from '../Components/windowForm/WindowForm'
import { useSelector,useDispatch } from 'react-redux'
import { RootState,AppDispatch } from '../redux/store'
import { hideMenu } from '../redux/toggleSlice'
import { projectData,toolbar_img } from '../data/data'
import { openForm } from '../redux/formSlice'



const Main = () => {
  const dispatch = useDispatch<AppDispatch>()

  const {formArray} = useSelector((state: RootState) => state.form)
  const StartMenuToggle = useSelector((state: RootState) => state.toggle.startMenuToggle)
  const subMenu = useSelector((state: RootState) => state.toggle.subMenu)

  
  // 더블 클릭시 폴더 띄우기 
  const onDoubleClick = (id: number):void =>{
   dispatch(openForm({index : id}))
  }

  const mainClick = (e:any):void => {
    dispatch(hideMenu({value : ''}))
    const remove = document.querySelectorAll('.Icon');
    remove.forEach(it => it.classList.remove('bg'))
    console.log('바탕화면',e.clientY,e.currentTarget.offsetTop)
  }

  return (
    <div className='Main' >
      <div className='main-screen' onClick={mainClick}>

        <IconDescTop
          title={'test1'}
          iconImg={toolbar_img .folder}
          onDoubleClick={()=>onDoubleClick(1)}
        />

      </div>
      {formArray.length > 0 && formArray.map((form,i) =>
        <WindowForm key={i} {...form} idx={i}/>
      )}
      {subMenu && <SubMenu />}
      {StartMenuToggle && <StartMenu />}
      <TaskBar />


    </div>
  )
}

export default Main
