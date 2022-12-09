import { FETCH_POSTS_SUCCESS, ADD, EDIT } from "./actions";
import { combineReducers } from "redux";
const initialPosts = [];
const reducerPost = (state = initialPosts, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};
const initialMode = { mode: "", data: {} };
const reducerMode = (state = initialMode, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, mode: action.payload.mode };
    case EDIT:
      return { ...state, mode: action.payload.mode, data: action.payload.data };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  reducerPost,
  reducerMode,
});

export default rootReducer;
