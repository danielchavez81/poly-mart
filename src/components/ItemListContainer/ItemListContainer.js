import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/mockData";

export default function ItemListContainer({ greetings }) {
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const filteredProducts = PRODUCTS.filter(
        (product) => product.categoryId === id
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(PRODUCTS);
    }
  }, [id]);
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Productos</h1>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <img src={product.pictureUrl} alt={product.title} />
            <h1 className="text-2xl font-bold">${product.price}</h1>

            <button className="bg-gray-800 text-white p-2 rounded-md">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
