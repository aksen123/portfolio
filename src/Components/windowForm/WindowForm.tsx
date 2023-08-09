import React from 'react'
import FormHead from './FormHead'
import Toolbar from './Toolbar'
import FormMain from './FormMain'
import './windowForm.scss'
import { ProjectType } from '../../data/data'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export type selectType = ProjectType & {
  idx : number
}

const WindowForm = (selectData:selectType) => {
    console.log(selectData.idx)
  const {formToggle} = useSelector((state:RootState)=> state.toggle)
  const screenWidth = formToggle ? '100%' : '800px'
  const screenHeight = formToggle ? '100%' : '650px'
  return (

    <div
    style={{
      width: `${screenWidth}`,
      height:`${screenHeight}`
    }}
    className='WindowForm'>
      <FormHead id={selectData.idx} icon={selectData.icon} title={selectData.title}/>
      <div className="window-body">
      <Toolbar url={selectData.url} icon={selectData.icon}/>
      <FormMain {...selectData} />
      </div>
    </div>
  )
}

export default WindowForm
