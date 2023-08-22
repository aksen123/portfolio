import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState,AppDispatch } from '../../redux/store'
import { addTodo } from '../../redux/todoSlice'
import { Category } from '../../redux/todoSlice'
import dayjs from 'dayjs'
import Badge from './Badge'

export type BadgeType = {
  title:string;
  class:string
}

const CreateTodo = () => {
  const [text, setText] = useState<string>('')
  const [badge, setBadge] = useState<BadgeType>({title:'테스트1', class:'test1'})
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value)
  }
  const dispatch = useDispatch<AppDispatch>()

  const add = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      date: dayjs().format("YYYY-MM-DD"),
      text: text,
      category: Category.TODO,
      badgeTitle:badge.title,
      badgeClass:badge.class
    }
    dispatch(addTodo({todo : newTodo}))
    setText('')
    // setBadge({title: '', class: ''})
  }
  return (
    <div className='CreateTodo'>
      <h1>할 일 목록</h1>
      <form onSubmit={add}>
      <input value={text} onChange={onChange} type="text" className="todoInput" placeholder='내용 입력후, Enter를 누르세요'/>
      <div className="boxWrap">
        <Badge title='테스트1' bgClass='test1' id='test1'setBadge={setBadge}/>
        <Badge title='테스트2' id='test2'setBadge={setBadge}/>
        <Badge title='테스트3' id='test3'setBadge={setBadge}/>
        
      </div>
      </form>
    </div>
  )
}

export default CreateTodo
