import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducerShopping from "./reducers";
const storeShopping = createStore(rootReducerShopping, applyMiddleware(thunk));
export default storeShopping;
