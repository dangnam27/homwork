import React, { useState } from "react";
import { useCookies } from "react-cookie";
const Home = () => {
  const [cookies, setCookie] = useCookies();
  const [form, setForm] = useState({ user: "", password: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "user") {
      setCookie("user", e.target.value, { path: "/", maxAge: 3600 });
    }
    if (e.target.name === "password") {
      setCookie("password", e.target.value, { path: "/" });
    }
  };
  console.log(cookies.password);
  return (
    <div className="container mt-5 text-center">
      <form>
        <label htmlFor="user">User</label>
        <input type="text" name="user" id="user" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </form>
      {cookies.password && <p>{cookies.password}</p>}
    </div>
  );
};

export default Home;
