import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
  id: number;
  date: string;
  text: string;
  category: Category;
  badgeTitle: string;
  badgeClass: string;
}
export enum Category {
  TODO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
}

type InitType = {
  todoList: TodoType[];
}

const initialState: InitType = {
  todoList:  [],
}

const updateTodo = (toDos : TodoType[]) => {
  localStorage.setItem('mwTodo',JSON.stringify(toDos))
}
const setTodo = (): [] => {
  let todo = null;
  if(localStorage.getItem('mwTodo') !== null) {
    todo  = JSON.parse(localStorage.getItem('mwTodo') as string)
  }else {
    todo = []
  }
    return todo
}
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {
    setToDos(state) {
      state.todoList = [...setTodo(), ...state.todoList]
    },
    addTodo(state, action:PayloadAction<{todo : TodoType}>) {
      const newTodo = action.payload.todo
      state.todoList.push(newTodo)
      updateTodo(state.todoList)
    },
    changCategory(state, action:PayloadAction<{id: number, category : Category }>) {
      const {id, category} = action.payload
      state.todoList.map(it => it.id === id ? it.category = category : it )
      updateTodo(state.todoList)
    },
    changeText(state,action:PayloadAction<{id : number, text: string}>) {
      const {id, text} = action.payload
      state.todoList.map(it => it.id === id ? it.text = text : it )
      updateTodo(state.todoList)
    },
    deleteTodo(state,action:PayloadAction<{id : number}>) {
      const {id} = action.payload
      state.todoList = state.todoList.filter(todo => todo.id !== id)
      updateTodo(state.todoList)
    },

  }
})

export default todoSlice.reducer
export const { addTodo, changCategory, changeText, deleteTodo, setToDos } =
  todoSlice.actions;