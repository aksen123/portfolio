import React from 'react'
import { TodoType, Category } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { changCategory } from '../../redux/todoSlice'
const TodoItem = ({id, date,text,category}: TodoType) => {
  
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (e : React.MouseEvent<HTMLButtonElement>) => { 
    e.stopPropagation() 
    dispatch(changCategory({id: id, category: e.currentTarget.name as Category}))
  }
  
  return (
    <div className='TodoItem'>
      <span className='date'>{date}</span>
      <span className='todoText'>{text}</span>
      <div className="buttons">
      {category !== Category.TODO &&<button onClick={onClick} name={Category.TODO}>해야함</button>}
      {category !== Category.DOING &&<button onClick={onClick} name={Category.DOING}>하는중</button>}
      {category !== Category.DONE &&<button onClick={onClick} name={Category.DONE}>끝!!</button>}

      </div>
    </div>
  )
}

export default TodoItem
