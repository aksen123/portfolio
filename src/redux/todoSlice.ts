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
const mockData: TodoType[] = [
  {
    id: 0,
    date: "2024-06-01",
    category: Category.TODO,
    text: "취업하기..!",
    badgeClass: "badge3", //작성된 투두 뱃지
    badgeTitle: "더 중요",
  },
];
type InitType = {
  todoList: TodoType[];
  bgTitle: string;
  bgClass: string;
};

const initialState: InitType = {
  todoList: mockData,
  bgTitle: "보통", //새로운 투두 작성할때 뱃지
  bgClass: "badge1",
};

const updateTodo = (toDos: TodoType[]) => {
  localStorage.setItem("mwTodo", JSON.stringify(toDos));
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setToDos(state) {
      const set = [
        ...new Set(
          [...todoSetting(), ...mockData].map((it) => JSON.stringify(it))
        ),
      ];
      state.todoList = set.map((it) => (it = JSON.parse(it)));
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
      // 카테고리 변경하기
      updateTodo(state.todoList);
    },
    changeToDo(
      state,
      action: PayloadAction<{
        id: number;
        text: string;
        title: string;
        bgClass: string;
      }>
    ) {
      const { id, text, title, bgClass } = action.payload;
      state.todoList = state.todoList.map((it) =>
        it.id === id
          ? { ...it, text: text, badgeTitle: title, badgeClass: bgClass }
          : it
      );
      // 투두 수정
      updateTodo(state.todoList);
    },
    deleteTodo(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
      updateTodo(state.todoList);
    },
    clickBadge(
      state,
      action: PayloadAction<{ title: string; bgClass: string }>
    ) {
      const { title, bgClass } = action.payload;
      state.bgTitle = title;
      state.bgClass = bgClass;
      // 투두리스트 작성시 뱃지 변경
      // console.log(state.bgClass,state.bgTitle)
    },
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
