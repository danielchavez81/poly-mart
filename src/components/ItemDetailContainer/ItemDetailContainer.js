import React from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import useItem from "../../hooks/useItem";
import QuantityPicker from "../QuantityPicker/QuantityPicker";

export default function ItemDetailContainer() {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const { item } = useItem(id);
  const { addItem, checkItem } = useCartContext();
  const handleAddToCart = () => {
    const newItemData = {
      id: item.id,
      title: item.title,
      price: item.price,
    };
    addItem(newItemData, quantity);
  };
  const handleQuantityPick = (operation) => {
    if (operation === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <section className="flex flex-row gap-20 items-center justify-center p-48">
      <article className="flex flex-col gap-4">
        <h1 className="text-5xl text-black font-bold">{item?.title}</h1>
        <h2 className="text-2xl font-medium">Price: ${item?.price}</h2>
        <h2 className="text-xl ">{item?.description}</h2>

        <button
          disabled={checkItem(item?.id)}
          className={`bg-green-500 text-lg text-white font-semibold hover:bg-green-600 transition-all ease-in-out p-4 rounded-lg w-fit ${
            checkItem(item?.id) &&
            "cursor-not-allowed opacity-50 hover:bg-green-500"
          }`}
          onClick={handleAddToCart}
        >
          <h2 className="text-xl font-bold">Add to cart</h2>
        </button>

        {checkItem(item?.id) && (
          <h2 className="text-xl font-bold text-red-400">
            Item already in cart!
          </h2>
        )}
        {!checkItem(item?.id) && (
          <QuantityPicker
            value={quantity}
            onAdd={() => handleQuantityPick("add")}
            onRemove={() => handleQuantityPick("remove")}
          />
        )}
      </article>
      <article>
        <img className="w-96 h-96" src={item?.pictureUrl} alt={item?.title} />
      </article>
    </section>
  );
}
