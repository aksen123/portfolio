import React from 'react'
import './todo.scss'
import { BadgeType } from './CreateTodo'
type Props =  {
  title : string;
  id: string;
  setBadge?: React.Dispatch<React.SetStateAction<BadgeType>> 
  bgClass?: string;
}



const Badge = ({title,id,setBadge, bgClass} :Props ) => {
  
  const test = (e: React.MouseEvent<HTMLDivElement>) => {
    if(setBadge) {
      const todo = document.querySelector('.CreateTodo')
      console.log(todo)
      const a = todo?.querySelectorAll('.Badge')
      // console.log(e.currentTarget.name)
      a?.forEach(it => it.className = 'Badge')
      e.currentTarget.className = `Badge ${id}`
      setBadge({title: title, class:id}) 
    }
  }


  return (
    <div className={`Badge ${bgClass}`} onClick={test}>
      {title}
    </div>
  );
}

export default Badge
