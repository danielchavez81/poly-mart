import React from "react";

export default function Button({ onClick, children, color, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-${color}-500 text-lg text-white font-semibold hover:bg-${color}-600 
      transition-all ease-in-out p-4 rounded-lg w-fit
      ${disabled && `cursor-not-allowed opacity-50 hover:bg-${color}-500`}
      `}
    >
      {children}
    </button>
  );
}
