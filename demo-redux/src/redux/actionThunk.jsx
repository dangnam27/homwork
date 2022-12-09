import "./ActionConstant";
import axios from "axios";
import { FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./ActionConstant";
export const fakeLogin = (payload) => {
  return async (dispatch) => {
    const { username, password } = payload;
    if (username === "admin" && password === "123") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload,
      });
      dispatch(getUser());
    } else {
      alert("login failed");
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: res.data,
    });
  };
};
