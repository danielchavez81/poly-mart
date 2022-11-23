import React from "react";

export default function NavCategory({ title }) {
  return (
    <h1 className="text-lg text-start font-medium text-neutral-100 opacity-80 w-[100px] break-words">
      {title}
    </h1>
  );
}
