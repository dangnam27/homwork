import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [item, setItem] = useState({ item: "" });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/todos`)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formSchema = yup.object().shape({
    item: yup.string(),
  });
  const handleChange = (e) => {
    setItem({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    axios
      .post(`http://localhost:3000/todos`, item)
      .then((res) => {
        todoList.push(res.data);
        setTodoList([...todoList]);
        setItem("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      <Formik
        initialValues={item}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={handleSubmit}>
        <Form>
          <Field
            name="item"
            value={item.item || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Add todo here"></Field>
          <ErrorMessage
            name="item"
            className="text-danger fw-bold"
            component="div"></ErrorMessage>
          <br />
          <button type="submit" className="btn btn-primary px-4">
            Add
          </button>
        </Form>
      </Formik>
      <ul className="mt-3">
        {todoList.map((e) => (
          <li key={e.id}>{e.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
