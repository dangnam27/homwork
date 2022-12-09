import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducerThunk";

const storeThunk = createStore(rootReducer, applyMiddleware(thunk));
export default storeThunk;
