import React from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../../context/CartContext";
import useItem from "../../hooks/useItem";
import Button from "../Button/Button";
import QuantityPicker from "../QuantityPicker/QuantityPicker";

export default function ItemDetailContainer() {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const { item } = useItem(id);
  const { addItem, checkItem, updateItemQuantity, removeItem } =
    useCartContext();
  const handleAddToCart = () => {
    const newItemData = {
      id: item.id,
      title: item.title,
      price: item.price,
    };
    addItem(newItemData, quantity);
    toast.success("Item added to cart", {
      position: toast.POSITION.TOP_LEFT,
    });
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

  const handleUpdateQuantity = () => {
    // console.log("update", isInCart);
    updateItemQuantity(item.id, quantity);
    toast.success(`Quantity updated to ${quantity}`, {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  const handleRemoveFromCart = () => {
    removeItem(item.id);
    toast.error("Item removed from cart", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  return (
    <section className="flex flex-row gap-20 items-center justify-center p-48">
      <article className="flex flex-col gap-4">
        <h1 className="text-5xl text-black font-bold">{item?.title}</h1>
        <h2 className="text-2xl font-medium">Price: ${item?.price}</h2>
        <h2 className="text-xl ">{item?.description}</h2>

        <Button
          disabled={checkItem(item?.id)}
          color="green"
          onClick={handleAddToCart}
        >
          <h2 className="text-xl font-bold">Add to cart</h2>
        </Button>

        <Button
          color={"green"}
          onClick={handleUpdateQuantity}
          disabled={!checkItem(item?.id)}
        >
          <h2 className="text-xl font-bold">Update quantity</h2>
        </Button>

        <Button
          color={"green"}
          onClick={handleRemoveFromCart}
          disabled={!checkItem(item?.id)}
        >
          <h2 className="text-xl font-bold">Remove from cart</h2>
        </Button>

        {checkItem(item?.id) && (
          <h2 className="text-xl font-bold text-red-400">
            Item already in cart!
          </h2>
        )}
        <QuantityPicker
          value={quantity}
          onAdd={() => handleQuantityPick("add")}
          onRemove={() => handleQuantityPick("remove")}
        />
      </article>
      <article>
        <img className="w-96 h-96" src={item?.pictureUrl} alt={item?.title} />
      </article>
      <ToastContainer />
    </section>
  );
}
