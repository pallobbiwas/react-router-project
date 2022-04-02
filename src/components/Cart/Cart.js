import React from "react";
import "./Cart.css";

const Cart = ({ card }) => {
  let Total = 0;
  let price = 0;
  for (const c of card) {
    Total = Total + c.quantity;
    price = price + c.quantity * c.price;
  }
  const tax = (.1* price).toFixed(2);
  const inTotal = tax + price;
  return (
    <div className="cart-tag">
      <h2>Your order</h2>
      <hr />
      <p>Total order: {Total}</p>
      <p>Total price: {price}</p>
      <p>Tax: {tax}$</p>
      <hr />
      <p>In total: {inTotal}$</p>
    </div>
  );
};

export default Cart;
