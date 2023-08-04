import React from 'react'
import FormHead from './FormHead'
import Toolbar from './Toolbar'
import FormMain from './FormMain'
import './windowForm.scss'
import { handle_img } from '../../data/data'

const WindowForm = () => {
  return (
    <div className='WindowForm'>
      <FormHead img={handle_img.maxsize} title={'window'}/>
      <div className="window-body">
      <Toolbar />
      <FormMain />
      </div>
    </div>
  )
}

export default WindowForm
