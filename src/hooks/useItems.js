import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/config";

//hook to fetch all the data from a collection firebase
export const useItems = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchedItems = [];
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        fetchedItems.push({ ...doc.data(), id: doc.id });
      });
      setItems(fetchedItems);
    });

    //Fetch documents from a collection using getdocs
  }, []);

  return items;
};
