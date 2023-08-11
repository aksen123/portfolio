import React,{useState, useRef} from 'react'
import FormHead from './FormHead'
import Toolbar from './Toolbar'
import FormMain from './FormMain'
import './windowForm.scss'
import { ProjectType } from '../../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../redux/store'
import { hideMenu } from "../../redux/toggleSlice";
export type selectType = ProjectType & {
  idx : number
}

const WindowForm = (selectData:selectType) => {
  const dispatch = useDispatch<AppDispatch>();
  const {formToggle} = useSelector((state:RootState)=> state.toggle)
  const screenWidth = formToggle ? '100%' : '800px'
  const screenHeight = formToggle ? '100%' : '650px'
  
  
  
  return (
    <div
    style={{
      width: `${screenWidth}`,
      height:`${screenHeight}`
    }}
    className='WindowForm'
    onClick={()=>dispatch(hideMenu({value: ''}))}
    >
      <FormHead id={selectData.idx} icon={selectData.icon} title={selectData.title}/>
      <div className="window-body">
      <Toolbar url={selectData.url} icon={selectData.icon}/>
      <FormMain {...selectData} />
      </div>
    </div>
  )
}

export default WindowForm
