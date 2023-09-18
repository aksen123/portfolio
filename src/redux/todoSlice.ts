import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";



export type TodoType = {
  id: number;
  date: string;
  text: string;
  category: Category;
  badgeTitle: string;
  badgeClass: string;
};
export enum Category {
  TODO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
}
const mockData :TodoType[] = [
  {
    id: 0,
    date:"2023-09-01",
    category: Category.DONE,
    text: '아침먹기',
    badgeClass: 'badge2',
    badgeTitle:"보통"
  },
]
type InitType = {
  todoList: TodoType[];
  bgTitle: string;
  bgClass: string;
};

const initialState: InitType = {
  todoList: mockData,
  bgTitle:'보통',
  bgClass:'badge1'
};

const updateTodo = (toDos: TodoType[]) => {
  localStorage.setItem("mwTodo", JSON.stringify(toDos));
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setToDos(state) {
      const set = [...new Set([...todoSetting(), ...mockData].map(it => JSON.stringify(it)))]
      state.todoList = set.map(it => it = JSON.parse(it))  ;
    },
    addTodo(state, action: PayloadAction<{ todo: TodoType }>) {
      const newTodo = action.payload.todo;
      state.todoList.push(newTodo);
      updateTodo(state.todoList);
    },
    changCategory(
      state,
      action: PayloadAction<{ id: number; category: Category }>
    ) {
      const { id, category } = action.payload;
      state.todoList.map((it) =>
        it.id === id ? (it.category = category) : it
      );
      updateTodo(state.todoList);
    },
    changeToDo(
      state,
      action: PayloadAction<{
        id: number;
        text: string;
        title : string;
        bgClass: string;
      }>
    ) {
      const { id, text,title,bgClass} = action.payload;
      state.todoList = state.todoList.map((it) =>
        it.id === id
          ? { ...it, text: text, badgeTitle:title  , badgeClass: bgClass }
          : it
      );

      updateTodo(state.todoList);
    },
    deleteTodo(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
      updateTodo(state.todoList);
    },
    clickBadge(state,action: PayloadAction<{title: string, bgClass: string}>) {
      const {title, bgClass} = action.payload;
      state.bgTitle = title;
      state.bgClass = bgClass;
      console.log(state.bgClass,state.bgTitle)
    }
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  changCategory,
  changeToDo,
  deleteTodo,
  setToDos,
  clickBadge,
} = todoSlice.actions;
export const todoSetting = (): [] => {
  let todo = null;
  if (localStorage.getItem("mwTodo") !== null) {
    todo = JSON.parse(localStorage.getItem("mwTodo") as string);
  } else {
    todo = [];
  }
  return todo;
};