import React from "react";
import ReactDOM from "react-dom/client";
import { TestApi } from "./components/TestApi";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterUsers from "./components/RouterUsers";
import GetUserArticle from "./components/GetUserArticle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GetUserArticle></GetUserArticle>);
