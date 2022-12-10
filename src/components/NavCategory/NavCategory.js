import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavCategory({ title, categoryId }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <h1
      onClick={handleNavigate}
      className="text-lg text-center font-medium leading-5
     text-gray-800 opacity-80 w-[90px] break-words
      hover:text-gray-500 cursor-pointer"
    >
      {title}
    </h1>
  );
}
