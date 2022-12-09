import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TODOADD } from "../../redux/todoList/actions";
import { v4 } from "uuid";
const NewTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = () => {
    dispatch({ type: TODOADD, payload: { text: item, id: v4() } });
    setItem("");
  };
  return (
    <div className="d-flex gap-3">
      <input
        type="text"
        className="form-control w-25"
        placeholder="Enter your todo"
        name="todoItem"
        value={item}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary px-5"
        onClick={handleSubmit}
        type="submit">
        Add
      </button>
    </div>
  );
};

export default NewTodo;
