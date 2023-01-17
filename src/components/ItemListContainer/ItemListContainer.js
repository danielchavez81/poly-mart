import React from "react";
import { useParams } from "react-router-dom";
import { useItems } from "../../hooks/useItems";
import Item from "../Item/Item";

export default function ItemListContainer() {
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const { id } = useParams();
  const { items } = useItems();

  React.useEffect(() => {
    if (id) {
      const filteredProducts = items?.filter(
        (product) => product.categoryId === id
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(items);
    }
  }, [id, items]);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Modelos 3D</h1>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
