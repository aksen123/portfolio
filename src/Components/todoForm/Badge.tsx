import React from 'react'
import './todo.scss'
import { BadgeType } from './TodoItem'
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
    const parent = e.currentTarget.parentElement
    const badges = parent?.querySelectorAll('.Badge')
    badges?.forEach(it => it.className = 'Badge')
    e.currentTarget.className = `Badge ${id}`
    if(!setBadge) {
      if(id){
        dispatch(clickBadge({ title: title, bgClass: id as string }))
      }else {
        e.currentTarget.className = `Badge ${Class}`
        return;
      }
    }else {
      setBadge({title: title, class: id as string})
      // console.log(title,id)
    }
  
  }


  return (
    <div className={`Badge ${Class}`} onClick={onClick}>
      {title}
    </div>
  );
}

export default Badge
