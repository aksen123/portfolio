import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { addTodo } from '../../redux/todoSlice'
import { Category } from '../../redux/todoSlice'
type PropsType = {
  title: string
  type : Category
}
const TodoList = ({title, type} : PropsType) => {
  const {todoList} = useSelector((state:RootState) =>state.todo)
  console.log(todoList)
  return (
    <div className='TodoList'>
      <h2>{title}</h2>
      {todoList.map((item,i) => item.category === type ? <TodoItem {...item}/> : false)}
    </div>
  )
}

export default TodoList
