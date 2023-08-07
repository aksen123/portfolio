import React from 'react'
import FormHead from './FormHead'
import Toolbar from './Toolbar'
import FormMain from './FormMain'
import './windowForm.scss'
import { handle_img } from '../../data/data'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
const WindowForm = () => {
  const {formToggle} = useSelector((state:RootState)=> state.toggle)
  const screenWidth = formToggle ? '100%' : '900px'
  const screenHeight = formToggle ? '100%' : '750px'
  return (

    <div
    style={{
      width: `${screenWidth}`,
      height:`${screenHeight}`
    }}
    className='WindowForm'>
      <FormHead img={handle_img.maxsize} title={'window'}/>
      <div className="window-body">
      <Toolbar />
      <FormMain />
      </div>
    </div>
  )
}

export default WindowForm
