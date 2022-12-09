import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Info } from "./Info";
import "./Index.css";
export const Index = () => {
  let activeStyle = {
    color: "red",
  };
  let activeClassName = {
    color: "red",
  };
  return (
    <div className="mt-5">
      <BrowserRouter>
        <div className="ps-5">
          <NavLink
            to="/"
            className="d-block"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="d-block"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="d-block"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}>
            Contact
          </NavLink>
          <NavLink
            to="/sss"
            className="d-block"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}>
            TestError
          </NavLink>
        </div>
        <hr />
        <div className="bg-warning">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/about/:userID" element={<Info />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="*"
              element={
                <main>
                  <p>There's nothing here</p>
                </main>
              }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
