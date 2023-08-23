import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState,AppDispatch } from '../../redux/store'
import { addTodo } from '../../redux/todoSlice'
import { Category } from '../../redux/todoSlice'
import dayjs from 'dayjs'
import Badge from './Badge'
import { BadgeType } from './TodoItem'

type PropsType = {
  badge: BadgeType,
  setBadge: React.Dispatch<React.SetStateAction<BadgeType>>
}

const CreateTodo = () => {
  const [text, setText] = useState<string>('');
  const {bgClass,bgTitle} = useSelector((state:RootState) => state.todo)
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
      badgeTitle:bgTitle,
      badgeClass:bgClass
    }
    dispatch(addTodo({todo : newTodo}))
    setText('')
  }
  return (
    <div className='CreateTodo'>
      <h1>할 일 목록</h1>
      <form onSubmit={add}>
      <input value={text} onChange={onChange} type="text" className="todoInput" placeholder='내용 입력후, Enter를 누르세요'/>
      <div className="boxWrap">
        <Badge title='테스트1' Class='test1' id='test1'/>
        <Badge title='테스트2' id='test2'/>
        <Badge title='테스트3' id='test3'/>
        
      </div>
      </form>
    </div>
  )
}

export default CreateTodo
