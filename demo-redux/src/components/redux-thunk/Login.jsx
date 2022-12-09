import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../../redux/actionThunk";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const userlogined = useSelector((state) => state.userlogined);
  const setValueForUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = () => {
    dispatch(fakeLogin(user));
  };
  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);
  return (
    <div>
      {" "}
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
