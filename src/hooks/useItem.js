import React from "react";
import { PRODUCTS } from "../data/mockData";
export default function useItem(itemId) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    setItem(PRODUCTS.find((element) => element.id === Number(itemId)));
  }, [itemId]);

  return { item };
}
