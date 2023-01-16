import React from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import CartOrder from "../CartOrder/CartOrder";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

export default function Cart() {
  const { cartItems, emptyCart } = useCartContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="flex flex-col gap-8 p-20">
      <div className="flex flex-row gap-10">
        <Button
          color="green"
          onClick={handleOpen}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
        <Button color="red" onClick={emptyCart}>
          Empty Cart
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold m-0">Products</h1>
        <>
          {cartItems.map((item) => {
            return <CartOrder key={item.id} {...item} />;
          })}
          {cartItems.length === 0 && (
            <h1 className="text-xl font-medium text-gray-400">Cart is empty</h1>
          )}
        </>
      </div>
      <CheckoutModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
}
