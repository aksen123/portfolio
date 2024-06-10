import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Category } from "../../redux/todoSlice";
type PropsType = {
  title: string;
  type: Category;
};
const TodoList = ({ title, type }: PropsType) => {
  const { todoList } = useSelector((state: RootState) => state.todo);
  return (
    <div className="TodoList">
      <h2 className="list-title">
        {title}
        <span>{todoList.filter((it) => it.category === type).length}개</span>
      </h2>
      {todoList.map((item, i) =>
        item.category === type ? <TodoItem key={i} {...item} /> : false
      )}
    </div>
  );
};

export default TodoList;
