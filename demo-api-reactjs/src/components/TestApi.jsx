import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const TestApi = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({ title: "", author: "" });
  const [id, setID] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  });
  const handleDel = (e) => {
    setID(e.target.value);
  };
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    list.push(item);
    setList([...list]);
    axios.post(`http://localhost:3000/posts`, item).then((res) => {
      console.log(res.data);
    });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        let arr = list.filter((item) => item.id != id);
        setList(arr);
      })
      .then((res) => {
        console.log(list);
      });
  };
  return (
    <div>
      <input
        name="title"
        value={item.title}
        onChange={handleChange}
        placeholder="Title"></input>
      <input
        name="author"
        value={item.author}
        onChange={handleChange}
        placeholder="Author"></input>
      <button onClick={handleSubmit}>Add</button>
      <br />
      <input value={id} onChange={handleDel} placeholder="Input ID delete" />
      <button onClick={handleDelete}>Delete</button>
      {list.map((e, index) => (
        <ul key={index}>
          <li>ID: {e.id}</li>
          <li>Title: {e.title}</li>
          <li>Author: {e.author}</li>
        </ul>
      ))}
    </div>
  );
};
