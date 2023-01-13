import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartOrder from "../CartOrder/CartOrder";

export default function Cart() {
  const { cartItems, emptyCart } = useCartContext();
  return (
    <div className="flex flex-col gap-12 p-20">
      <button
        onClick={emptyCart}
        className="bg-red-500 text-lg text-white font-semibold hover:bg-red-600 transition-all ease-in-out p-4 rounded-lg w-fit"
      >
        Empty cart
      </button>
      <div>
        <h1 className="text-2xl font-bold my-4">Products</h1>
        <div className="flex flex-col gap-4 divide-y-4">
          {cartItems.map((item) => {
            return <CartOrder key={item.id} {...item} />;
          })}
          {cartItems.length === 0 && (
            <h1 className="text-xl font-medium text-gray-400 my-4">
              Cart is empty
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
