import React from 'react'
import { toolbar_img } from '../../data/data'
const menuTitle: string[] = ['파일(F)','편집(E)','보기(V)', '즐겨찾기(A)', '도구(T)', '도움말(H)']


const Toolbar = () => {
  return (
    <div className='Toolbar'>
      <div className="top">
        <div className="menus">
          {menuTitle.map(title => <span key={title}>{title}</span>)}
        </div>
        <img src={toolbar_img.windowLogo} alt="" />
      </div>
      <div className="bottom">

      </div>
      <div className="search">

      </div>
    </div>
  )
}

export default Toolbar
