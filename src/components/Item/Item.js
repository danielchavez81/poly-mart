import React from "react";
import { useNavigate } from "react-router-dom";

export default function Item({ product }) {
  const navigate = useNavigate();
  const handleNavigateToDetails = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div onClick={handleNavigateToDetails} className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.pictureUrl} alt={product.title} />
      <h1 className="text-2xl font-bold">${product.price}</h1>

      <button className="bg-gray-800 text-white p-2 rounded-md">
        Agregar al carrito
      </button>
    </div>
  );
}
