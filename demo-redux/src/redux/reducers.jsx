import { combineReducers } from "redux";
import {
  DECREASE,
  INCREASE,
  LOGIN_SUCCESS,
  FETCH_USER_SUCCESS,
} from "./ActionConstant";

//initState có thể là số trực tiếp hoặc Object
const initState = {
  count: 0,
};
const reducers = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const initTest = -11;
const test = (state = initTest, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 2;
    case DECREASE:
      return state - 2;
    default:
      return state;
  }
};

const initialLoginUser = {
  users: [],
  userlogined: {},
};
const reducerLoginUser = (state = initialLoginUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userlogined: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  initChange: reducers,
  initTest: test,
  initLoginUser: reducerLoginUser,
});

export default rootReducer;
