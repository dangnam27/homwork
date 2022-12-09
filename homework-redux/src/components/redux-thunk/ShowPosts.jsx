import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_POSTS_SUCCESS, ADD, EDIT } from "../../redux/thunk/actions";
import { useNavigate } from "react-router-dom";
const ShowPosts = () => {
  const postList = useSelector((state) => state.reducerPost);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
        console.log("count");
      })
      .catch((err) => console.log(err));
  }, []);
  const goToAddPost = () => {
    dispatch({ type: ADD, payload: { mode: "ADD" } });
    navigate("/addeditpost");
  };
  const goToEditPost = (e) => {
    dispatch({ type: EDIT, payload: { mode: "EDIT", data: e } });
    navigate("/addeditpost");
  };
  return (
    <div className="container mt-4">
      <h1 className="text-center text-danger">ShowPosts</h1>
      <div className="d-flex justify-content-between mt-3 border rounded-2 p-3 align-middle">
        <h4 className="fw-bold">Post</h4>
        <button className="btn btn-success" onClick={goToAddPost}>
          Add new Post
        </button>
      </div>
      {postList.map((e) => (
        <div key={e.id} className="my-3 rounded-2 border p-3">
          <h3 className="mb-4">{e.title}</h3>
          <div className="d-flex justify-content-between align-middle">
            <p className="w-75 m-0">{e.body}</p>
            <button
              className="btn btn-primary px-5"
              onClick={() => goToEditPost(e)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPosts;
