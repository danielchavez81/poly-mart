import React from "react";

export default function AddRemoveButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 hover:bg-gray-500 transition-all ease-in-out px-4 py-2 rounded-md"
    >
      {children}
    </button>
  );
}
