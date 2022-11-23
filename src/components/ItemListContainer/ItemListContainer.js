import React from "react";

export default function ItemListContainer({ greetings }) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{greetings}</h1>
    </div>
  );
}
