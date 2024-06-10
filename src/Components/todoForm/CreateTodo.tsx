import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { addTodo } from "../../redux/todoSlice";
import { Category } from "../../redux/todoSlice";
import dayjs from "dayjs";
import Badge from "./Badge";

const CreateTodo = () => {
  const [text, setText] = useState<string>("");
  const { bgClass, bgTitle } = useSelector((state: RootState) => state.todo);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const dispatch = useDispatch<AppDispatch>();

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== "") {
      const newTodo = {
        id: Date.now(),
        date: dayjs().format("YYYY-MM-DD"),
        text: text,
        category: Category.TODO,
        badgeTitle: bgTitle,
        badgeClass: bgClass,
      };
      dispatch(addTodo({ todo: newTodo }));
    } else {
      alert("내용을 입력해주세요");
    }
    setText("");
  };
  return (
    <div className="CreateTodo">
      <h1>할 일 목록</h1>
      <form onSubmit={add}>
        <input
          value={text}
          onChange={onChange}
          type="text"
          className="todoInput"
          placeholder="내용 입력후, Enter를 누르세요"
        />
        <div className="boxWrap">
          <Badge title="보통" Class="badge1" id="badge1" />
          <Badge title="중요함" id="badge2" />
          <Badge title="더 중요" id="badge3" />
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
