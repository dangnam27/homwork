import { FETCH_USER_SUCCESS } from "./actions";
import { combineReducers } from "redux";

const initialUsers = [];
const reducer = (state = initialUsers, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  initUsers: reducer,
});
export default rootReducer;
