import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/redux-saga/UserList";
import { Provider } from "react-redux";
import store from "./redux/saga/store";
import RouterShowPosts from "./components/redux-thunk/RouterShowPosts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <UserList />
  // </Provider>
  <RouterShowPosts />
);
