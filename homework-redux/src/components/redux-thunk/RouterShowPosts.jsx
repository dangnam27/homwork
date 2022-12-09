import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEditPost from "./AddEditPost";
import ShowPosts from "./ShowPosts";
import { Provider } from "react-redux";
import storePosts from "../../redux/thunk/store";
const RouterShowPosts = () => {
  return (
    <Provider store={storePosts}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPosts></ShowPosts>}></Route>
          <Route
            path="/addeditpost"
            element={<AddEditPost></AddEditPost>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default RouterShowPosts;
