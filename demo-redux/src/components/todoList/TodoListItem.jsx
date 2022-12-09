import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TODODELETE } from "../../redux/todoList/actions";
const TodoListItem = (props) => {
  const LIST = useSelector((state) => state.reducerTodo);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const newList = LIST.filter((e) => e.id !== props.id);
    dispatch({ type: TODODELETE, payload: newList });
  };
  return (
    <>
      <h4>{props.text}</h4>
      <button className="btn btn-danger" onClick={handleSubmit}>
        Remove
      </button>
    </>
  );
};

export default TodoListItem;
