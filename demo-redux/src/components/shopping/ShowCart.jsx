import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutCart, RESET_CART } from "../../redux/shopping/actions";
const ShowCart = () => {
  const cartList = useSelector((state) => state.reducerCart);
  const products = useSelector((state) => state.reducerProducts);
  const dispatch = useDispatch();
  const handleCheckout = () => {
    const confirm = window.confirm("Are you sure you want to checkout");
    if (confirm) {
      dispatch(checkoutCart(products));
      dispatch({ type: RESET_CART });
    }
  };
  const total = cartList.reduce((previous, current) => {
    return previous + current.number * current.price;
  }, 0);
  if (cartList.length > 0) {
    return (
      <div>
        <h2 className="my-4">Your Cart</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((e, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="fw-bold">Total: {total}</p>
        <button className="btn btn-success" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="my-4">Your Cart</h2>
        <p>Please add some products to cart</p>
        <p>Total: {total}</p>
        <button className="btn btn-outline-secondary" disabled>
          Checkout
        </button>
      </div>
    );
  }
};

export default ShowCart;
