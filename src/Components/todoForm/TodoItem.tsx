import React, { useState } from "react";
import { TodoType, Category } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { changCategory, changeText, deleteTodo } from "../../redux/todoSlice";
import pen from "../../images/pen.png";
import trash from "../..//images/trash.png";
import Badge from "./Badge";
import { BadgeType } from "./TodoForm";

const TodoItem = ({
  id,
  date,
  text,
  category,
  badgeClass,
  badgeTitle,
}: TodoType) => {
  const [inputText, setInputText] = useState<string>("");
  const [inputDisplay, setInputDisplay] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(
      changCategory({ id: id, category: e.currentTarget.name as Category })
    );
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeText({ id: id, text: inputText }));
    setInputText("");
    setInputDisplay(false);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputText(e.currentTarget.value);
  };

  const toggleInput = (): void => {
    if (category != Category.DONE) {
      setInputDisplay(!inputDisplay);
    } else if (window.confirm("삭제하시겠습니까?")) {
      dispatch(deleteTodo({ id: id }));
    }
  };
  return (
    <div className="TodoItem">
      <div className="todoWrap">
        <div className="dateWrap">
          <Badge
            title={badgeTitle}
            id={badgeClass}
            Class={`${badgeClass} on`}
          />
          <span className={category === Category.DONE ? "date done" : "date"}>
            {date.slice(2)}
          </span>
        </div>

        <span
          className={category === Category.DONE ? "todoText done" : "todoText"}
        >
          {text}
        </span>

        <div className="buttons">
          {category !== Category.TODO && (
            <button onClick={onClick} name={Category.TODO}>
              해야함
            </button>
          )}
          {category !== Category.DOING && (
            <button onClick={onClick} name={Category.DOING}>
              하는중
            </button>
          )}
          {category !== Category.DONE && (
            <button onClick={onClick} name={Category.DONE}>
              끝!!
            </button>
          )}
          <button onClick={toggleInput}>
            <img src={category !== Category.DONE ? pen : trash} alt="" />
          </button>
        </div>
      </div>
      <form
        className={inputDisplay ? "correction on" : "correction"}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder=" 수정내용 입력 후 Enter"
          value={inputText}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default TodoItem;
