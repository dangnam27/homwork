import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });

  const userLogined = useSelector((state) => state.initLoginUser.userlogined);
  const setValueForUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: user });
    console.log(userLogined);
  };
  useEffect(() => {
    if (userLogined.username) {
      navigate("/users");
    }
  }, [userLogined, navigate]);
  return (
    <div className="container mt-5">
      <h1 className="text-center">Login</h1>
      <form>
        <label>User name</label>
        <input
          id="username"
          name="username"
          onChange={setValueForUser}
          type="text"
        />
        <label>Password</label>
        <input
          id="password"
          name="password"
          onChange={setValueForUser}
          type="password"
        />
        <button
          type="button"
          onClick={() => {
            login();
          }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
