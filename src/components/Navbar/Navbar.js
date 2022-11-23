import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavCategory from "../NavCategory/NavCategory";

export default function Navbar() {
  return (
    <nav className="w-full h-24 bg-neutral-100 shadow-lg flex items-center justify-between px-10">
      <div className="flex flex-row gap-16 items-center">
        <h1 className="text-3xl font-bold cursor-default">Poly.mart</h1>
        <div className="flex flex-row gap-4 items-center">
          <NavCategory title="Low-poly assets" />
          <NavCategory title="Game assets" />
          <NavCategory title="High-poly assets" />
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}
