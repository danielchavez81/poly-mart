import React from "react";
import AddRemoveButton from "./AddRemoveButton/AddRemoveButton";

export default function QuantityPicker({ value, onAdd, onRemove }) {
  return (
    <div className="flex flex-row gap-6 justify-start items-center">
      Cantidad:
      <AddRemoveButton onClick={onRemove}>-</AddRemoveButton>
      <span className="text-lg font-bold">{value}</span>
      <AddRemoveButton onClick={onAdd}>+</AddRemoveButton>
    </div>
  );
}
