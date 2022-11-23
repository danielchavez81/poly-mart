import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import LogoIcon from "../LogoIcon/LogoIcon";
import NavCategory from "../NavCategory/NavCategory";

export default function Navbar() {
  return (
    <nav className="w-full h-24 bg-white shadow-lg flex items-center justify-between px-10">
      <section className="flex flex-row gap-24 items-center">
        <div className="flex items-center gap-8">
          <LogoIcon />
          <h1 className="text-3xl font-bold cursor-default">Poly.mart</h1>
        </div>
        <div className="flex gap-4 items-center">
          <NavCategory title="Low-poly assets" />
          <NavCategory title="Game assets" />
          <NavCategory title="High-poly assets" />
        </div>
      </section>
      <CartWidget />
    </nav>
  );
}
