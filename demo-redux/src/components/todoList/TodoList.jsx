import React from "react";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
import NewTodo from "./NewTodo";
const TodoList = () => {
  const SHOW_LIST = useSelector((state) => state.reducerTodo);
  return (
    <div className="container mt-4">
      <h1>Todo List</h1>
      <NewTodo></NewTodo>
      {SHOW_LIST.map((e) => (
        <div key={e.id} className="mt-4">
          <hr />
          <TodoListItem text={e.text} id={e.id}></TodoListItem>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
