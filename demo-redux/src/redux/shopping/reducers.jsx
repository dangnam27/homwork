import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  INCREASE_NUMBER_CART,
  UPDATE_INVENTORY,
  RESET_CART,
} from "./actions";
import { combineReducers } from "redux";
const initialProducts = [];
const reducerProducts = (state = initialProducts, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return [...action.payload];
    case UPDATE_INVENTORY:
      return [...action.payload];
    default:
      return state;
  }
};
const initialCart = [];
const reducerCart = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case INCREASE_NUMBER_CART:
      return [...action.payload];
    case RESET_CART:
      return [];
    default:
      return state;
  }
};

const rootReducerShopping = combineReducers({
  reducerProducts,
  reducerCart,
});
export default rootReducerShopping;
