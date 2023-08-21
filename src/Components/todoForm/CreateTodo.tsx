import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState,AppDispatch } from '../../redux/store'
import { addTodo } from '../../redux/todoSlice'
import { Category } from '../../redux/todoSlice'
import dayjs from 'dayjs'
const CreateTodo = () => {
  const [text, setText] = useState<string>('')
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
      category: Category.TODO
    }
    dispatch(addTodo({todo : newTodo}))
    setText('')
  }
  return (
    <div className='CreateTodo'>
      <h1>할 일 목록</h1>
      <form onSubmit={add}>
      <input value={text} onChange={onChange} type="text" name="todoInput" placeholder='내용 입력후, Enter를 누르세요'/>
      </form>
    </div>
  )
}
// text , id ,date, category

export default CreateTodo
