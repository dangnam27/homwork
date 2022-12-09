import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/basic/Home";
import { Index } from "./components/basic/Index";
import { Index2 } from "./components/router2/Index2";
import { Index3 } from "./components/router3/Index3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
