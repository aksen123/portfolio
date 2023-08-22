import React from 'react'
import './todo.scss'
import { BadgeType } from './TodoForm'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { clickBadge } from '../../redux/todoSlice'
type Props =  {
  title : string;
  id?: string;
  setBadge?: React.Dispatch<React.SetStateAction<BadgeType>> 
  Class?: string;
}



const Badge = ({title,id, setBadge, Class} :Props ) => {
  const dispatch = useDispatch<AppDispatch>();
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if(id) {
      const creator = document.querySelector('.CreateTodo')
      const badges = creator?.querySelectorAll('.Badge')
      badges?.forEach(it => it.className = 'Badge')
      e.currentTarget.className = `Badge ${id}`
      dispatch(clickBadge({title: title, bgClass: id as string}))
    }
  
  }


  return (
    <div className={`Badge ${Class}`} onClick={onClick}>
      {title}
    </div>
  );
}

export default Badge
