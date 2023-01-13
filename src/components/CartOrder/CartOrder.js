import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function CartOrder(props) {
  const { removeItem } = useCartContext();
  const handleRemoveItem = () => {
    console.log("Se removio el item", props.id);
    removeItem(props.id);
  };
  return (
    <div className="p-10 text-black font-semibold text-xl rounded-md gap-2  flex flex-col">
      <h2>{props.title}</h2>
      <h2>Amount: {props.quantity}</h2>
      <h2>Price: ${props.price * props.quantity}</h2>
      <button
        className="bg-red-400 w-fit p-2 rounded-md text-white"
        onClick={handleRemoveItem}
      >
        <h2>Remove</h2>
      </button>
    </div>
  );
}
