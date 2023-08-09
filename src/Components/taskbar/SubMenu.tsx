import React from 'react'
import IconWrap from './IconWrap'
import { projectData } from '../../data/data'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { openForm } from '../../redux/formSlice'

const SubMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const onClick = (id:number):void => {
    dispatch(openForm({index : id}))
  }
  return (
    <div className="SubMenu">
      {projectData.map((data, i) => (
        <IconWrap
          iconImg={data.icon}
          title={data.title}
          classValue='menu'
          onClick={()=>onClick(data.id)}
        />
      ))}
    </div>
  );
}

export default SubMenu
