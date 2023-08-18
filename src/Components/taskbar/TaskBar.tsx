import React from 'react'
import '../../style/main.scss'
import DateWrap from './DateWrap'
import { AppDispatch,RootState } from '../../redux/store'
import { toggleStartMenu, hideMenu } from '../../redux/toggleSlice'
import { useDispatch,useSelector } from 'react-redux'
import WindowTab from '../windowForm/WindowTab'
const TaskBar = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { formArray } = useSelector((state: RootState) => state.form);
  return (
    <div className='Taskbar-wrap'>
      <div 
      className='start-btn'
      onClick={()=>dispatch(toggleStartMenu({value : ''}))}
      >

      </div>
      <div className='taskbar'>
        {formArray.length > 0 && formArray.map((form, i) => <WindowTab key={i} {...form} idx={i}/>)}
      </div>
      <DateWrap />
    </div>
  )
}

export default TaskBar
