import React from 'react'
import { menu_img } from '../../data/data'
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from '../../redux/store';
import { activeTab } from '../../redux/formSlice';
type TapType = {
  title: string;
  icon: string;
  idx: number;
  active: boolean
}

const WindowTab = ({title, icon, idx, active}: TapType) => {

  const dispatch = useDispatch<AppDispatch>()
  const click = () =>{
    if(active) {
      active = false
      console.log(active)
    }
    dispatch(activeTab({idx : idx}))
  }

  return (
    <div className={active ? `window-tab on` : `window-tab`} onClick={click}>
      <img width={30} src={icon} alt="" />
      <span>{title}</span>
    </div>
  )
}

export default WindowTab
