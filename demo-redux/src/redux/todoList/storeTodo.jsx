import { createStore } from "redux";
import rootReducerTodo from "./reducers";
const storeTodo = createStore(rootReducerTodo);
export default storeTodo;
