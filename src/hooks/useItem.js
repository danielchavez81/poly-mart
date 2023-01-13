import React from "react";
import { useItems } from "./useItems";

export default function useItem(itemId) {
  const [item, setItem] = React.useState({});
  const { items } = useItems();
  React.useEffect(() => {
    setItem(items.find((element) => element.id === itemId));
  }, [itemId, items]);

  return { item };
}
