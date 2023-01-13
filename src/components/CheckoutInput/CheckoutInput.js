import React from "react";

export default function CheckoutInput({ value, onChange, label }) {
  return (
    <input
      type="text"
      placeholder={label}
      onChange={onChange}
      value={value}
      className="border-2 border-gray-300 p-2 rounded-lg hover:border-gray-400 transition-all ease-in-out focus:border-gray-500 focus:outline-none"
    />
  );
}
