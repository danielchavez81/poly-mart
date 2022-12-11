import React from "react";
import { useNavigate } from "react-router-dom";

export default function Item({ product }) {
  const navigate = useNavigate();
  const handleNavigateToDetails = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div
      onClick={handleNavigateToDetails}
      className="bg-gray-100 p-2 flex flex-col items-center  rounded-md shadow-md cursor-pointer justify-around hover:scale-105"
    >
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.pictureUrl} alt={product.title} />
      <h1 className="text-2xl font-bold">${product.price}</h1>
    </div>
  );
}
