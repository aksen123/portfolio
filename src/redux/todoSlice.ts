import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
  id: number;
  date: string;
  text: string;
  category: Category;
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

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {
    addTodo(state, action:PayloadAction<{todo : TodoType}>) {
      const newTodo = action.payload.todo
      state.todoList.push(newTodo)
    },
    changCategory(state, action:PayloadAction<{id: number, category : Category }>) {
      const {id, category} = action.payload
      state.todoList.map(it => it.id === id ? it.category = category : it )
    },
    changeText(state,action:PayloadAction<{id : number, text: string}>) {
      const {id, text} = action.payload
      state.todoList.map(it => it.id === id ? it.text = text : it )
    },
    deleteTodo(state,action:PayloadAction<{id : number}>) {
      const {id} = action.payload
      state.todoList = state.todoList.filter(todo => todo.id !== id)
    }
  }
})

export default todoSlice.reducer
export const { addTodo, changCategory, changeText, deleteTodo } = todoSlice.actions;