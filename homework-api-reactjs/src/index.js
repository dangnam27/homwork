import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsRouter from "./components/ContactsRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactsRouter></ContactsRouter>);
