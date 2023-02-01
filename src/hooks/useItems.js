import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/config";

export const useItems = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchedItems = [];
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        fetchedItems.push({ ...doc.data(), id: doc.id });
      });
      setItems(fetchedItems);
    });
  }, []);

  return { items };
};
