import React from "react";
import NavCategory from "../NavCategory/NavCategory";

export default function Navbar() {
  return (
    <nav className="w-full h-24 bg-neutral-500 flex items-center">
      <div className="flex flex-row gap-4">
        <NavCategory title="Low-poly assets" />
        <NavCategory title="Game assets" />
        <NavCategory title="High-poly assets" />
      </div>
    </nav>
  );
}
