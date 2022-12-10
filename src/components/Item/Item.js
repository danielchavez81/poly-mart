import React from "react";

export default function Item({ product }) {
  return (
    <div key={product.id} className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.pictureUrl} alt={product.title} />
      <h1 className="text-2xl font-bold">${product.price}</h1>

      <button className="bg-gray-800 text-white p-2 rounded-md">
        Agregar al carrito
      </button>
    </div>
  );
}
