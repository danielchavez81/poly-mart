import React from "react";

export default function NavCategory({ title }) {
  return (
    <h1 className="text-lg text-start font-medium text-gray-800 opacity-80 w-[100px] break-words hover:text-gray-500 cursor-pointer">
      {title}
    </h1>
  );
}
