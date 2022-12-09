import axios from "axios";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const UPDATE_INVENTORY = "UPDATE_INVENTORY";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_NUMBER_CART = "INCREASE_NUMBER_CART";
export const RESET_CART = "RESET_CART";
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/products");
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error getting products:", e);
    }
  };
};

export const checkoutCart = (payload) => {
  return async (dispatch) => {
    try {
      await payload.map((e) => {
        axios.put(`http://localhost:3001/products/${e.id}`, e);
      });
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: payload });
    } catch (e) {
      console.log("error getting products:", e);
    }
  };
};
