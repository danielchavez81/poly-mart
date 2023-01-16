import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function CartOrder(props) {
  const { removeItem } = useCartContext();
  const handleRemoveItem = () => {
    removeItem(props.id);
  };
  return (
    <div className="p-10 text-black font-semibold text-xl rounded-md gap-2  flex flex-col">
      <h2>{props.title}</h2>
      <h2>Amount: {props.quantity}</h2>
      <h2>Price: ${props.price * props.quantity}</h2>
      <h2
        onClick={handleRemoveItem}
        className="text-red-500 font-bold text-lg cursor-pointer hover:text-red-600 transition-all ease-in-out"
      >
        Remove Item
      </h2>
    </div>
  );
}
