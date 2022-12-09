import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  ADD_TO_CART,
  UPDATE_INVENTORY,
  INCREASE_NUMBER_CART,
} from "../../redux/shopping/actions";
const ShowProducts = () => {
  const products = useSelector((state) => state.reducerProducts);
  const cartList = useSelector((state) => state.reducerCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const handleAdd = (e, index) => {
    console.log(products);
    const checkIndexCart = cartList.findIndex((item) => item.id === e.id);
    if (checkIndexCart == -1) {
      products[index].inventory--;
      const newCart = { ...e };
      newCart.number = 1;
      dispatch({ type: UPDATE_INVENTORY, payload: products });
      dispatch({ type: ADD_TO_CART, payload: newCart });
    } else if (products[index].inventory > 0) {
      products[index].inventory--;
      const newCart = [...cartList];
      newCart[checkIndexCart].number++;
      dispatch({ type: UPDATE_INVENTORY, payload: products });
      dispatch({ type: INCREASE_NUMBER_CART, payload: newCart });
    }
  };
  return (
    <>
      <h2 className="my-4">Products</h2>
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>{e.inventory}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    handleAdd(e, index);
                  }}>
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowProducts;
