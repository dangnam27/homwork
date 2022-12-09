import React from "react";
import ShowCart from "./ShowCart";
import ShowProducts from "./ShowProducts";

const MainShopping = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Shopping Cart</h1>
      <hr />
      <ShowProducts></ShowProducts>
      <hr />
      <ShowCart></ShowCart>
    </div>
  );
};

export default MainShopping;
