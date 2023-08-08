import React from 'react'
import FormHead from './FormHead'
import Toolbar from './Toolbar'
import FormMain from './FormMain'
import './windowForm.scss'
import { handle_img } from '../../data/data'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
type ProjectType = {
  id: number;
  title: string;
  icon: string;
  desc: string[];
  project_img: string[];
  url: string;
  skill: string[];
};


const WindowForm = () => {
  
  const {selectData} = useSelector((state:RootState) => state.form)
  console.log(selectData)
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
      <FormHead icon={selectData.icon} title={selectData.title}/>
      <div className="window-body">
      <Toolbar url={selectData.url} icon={selectData.icon}/>
      <FormMain {...selectData}/>
      </div>
    </div>
  )
}

export default WindowForm
