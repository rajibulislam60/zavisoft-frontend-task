import React from "react";
import CartTitle from "../components/cart/CartTitle";
import CartProducts from "../components/cart/CartProducts";
import SuggestProducts from "../components/product/SuggestProducts";

const Cart = () => {
  return (
    <div>
      <CartTitle />
      <CartProducts />
      <SuggestProducts />
    </div>
  );
};

export default Cart;
