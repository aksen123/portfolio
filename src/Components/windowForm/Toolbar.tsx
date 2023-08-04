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
        <div className='back-forward'>
          <img width={35} src={toolbar_img.back} alt="back" />
          <span>뒤로</span>
          <img className='arrow' width={7} src={toolbar_img.arrow} alt="arrow" />
        </div>
        <div className='back-forward'>
          <img width={35} src={toolbar_img.forward} alt="forward" />
          <img className='arrow' width={7} src={toolbar_img.arrow} alt="arrow" />
        </div>
        <img width={30} src={toolbar_img.folder} alt="folder" />
      </div>
      <div className="search">

      </div>
    </div>
  )
}

export default Toolbar
