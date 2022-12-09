import { TODOADD, TODODELETE } from "./actions";
import { combineReducers } from "redux";
const initialState = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn Redux" },
  { id: 3, text: "Build something fun!" },
];

const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case TODOADD:
      return [...state, { id: action.payload.id, text: action.payload.text }];
    case TODODELETE:
      return [...action.payload];
    default:
      return state;
  }
};
const rootReducerTodo = combineReducers({
  reducerTodo,
});
export default rootReducerTodo;
