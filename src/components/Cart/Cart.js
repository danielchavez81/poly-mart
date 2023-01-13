import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, emptyCart } = useCartContext();
  return (
    <div>
      {cartItems.map((item) => {
        return <div>{item.itemId}</div>;
      })}
      <button onClick={emptyCart}>Empty cart</button>
    </div>
  );
}
