import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoComponent from "./components/DemoComponent";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterSaga from "./components/reduxSaga/RouterSaga";
import RouterReduxThunk from "./components/redux-thunk/RouterReduxThunk";
import TodoList from "./components/todoList/TodoList";
import storeTodo from "./redux/todoList/storeTodo";
import MainShopping from "./components/shopping/MainShopping";
import storeShopping from "./redux/shopping/storeShopping";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <DemoComponent />
  // </Provider>
  // <RouterReduxThunk></RouterReduxThunk>
  // <Provider store={storeTodo}>
  //   <TodoList></TodoList>
  // </Provider>
  <Provider store={storeShopping}>
    <MainShopping></MainShopping>
  </Provider>
);
