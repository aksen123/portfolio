import React,{useEffect,useState} from 'react'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import './todo.scss'
import { ProjectType } from '../../data/data'
import { Category } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { setToDos } from '../../redux/todoSlice'




const TodoForm = ({title,screenToggle}: ProjectType) => {


  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(setToDos())
  },[])
  return (
    <div className='TodoForm'>
      <CreateTodo  />
      <div className={screenToggle ? 'listWrap on' : 'listWrap'}>
      <TodoList  title='해야함' type={Category.TODO}/>
      <TodoList  title='하는 중' type={Category.DOING}/>
      <TodoList  title='완료' type={Category.DONE}/>
      </div>
    </div>
  )
}

export default TodoForm
