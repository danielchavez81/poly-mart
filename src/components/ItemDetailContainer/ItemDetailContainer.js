import React from "react";
import { useParams } from "react-router-dom";
import useItem from "../../hooks/useItem";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { item } = useItem(id);
  //   console.log(item);
  return <div>{item.title}</div>;
}
