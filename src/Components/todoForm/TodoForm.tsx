import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import "./todo.scss";
import { ProjectType } from "../../data/data";
import { Category } from "../../redux/todoSlice";

const TodoForm = ({ title, screenToggle }: ProjectType) => {
  return (
    <div className="TodoForm">
      <CreateTodo />
      <div className={screenToggle ? "listWrap on" : "listWrap"}>
        <TodoList title="해야함" type={Category.TODO} />
        <TodoList title="하는 중" type={Category.DOING} />
        <TodoList title="완료" type={Category.DONE} />
      </div>
    </div>
  );
};

export default TodoForm;
