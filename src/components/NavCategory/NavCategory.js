import React from "react";
import { NavLink } from "react-router-dom";

export default function NavCategory({ title, categoryId }) {
  return (
    <NavLink
      to={`/category/${categoryId}`}
      style={({ isActive }) => {
        return {
          borderBottom: isActive ? "2px solid #000" : "none",
        };
      }}
      className="text-lg text-center font-medium leading-5
     text-gray-800 opacity-80 w-[90px] break-words
      hover:text-gray-500 cursor-pointer"
    >
      {title}
    </NavLink>
  );
}
