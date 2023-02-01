import Modal from "@mui/material/Modal";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import CheckoutInput from "../CheckoutInput/CheckoutInput";
const CheckoutModal = ({ open, handleClose }) => {
  const [checkoutInfo, setCheckoutInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { cartItems, emptyCart } = useCartContext();

  const handleCheckout = () => {
    if (
      checkoutInfo.name &&
      checkoutInfo.email &&
      checkoutInfo.phone &&
      checkoutInfo.address
    ) {
      alert(`Thanks for your order!
        Your order is ${cartItems.length} items
        Total amount is ${cartItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        )}
        Items:
        ${cartItems.map((item) => item.title).join(", ")}
      `);
      emptyCart();
      handleClose();
      cleanInputs();
    } else {
      toast.error("Please enter all the details");
      // alert("Please enter all the details");
    }
  };
  const cleanInputs = () => {
    setCheckoutInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="bg-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <p className="text-gray-400">Please enter your details</p>
        <div className="flex flex-col gap-4 mt-4">
          <CheckoutInput
            label="Name"
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutInfo, name: e.target.value })
            }
            value={checkoutInfo.name}
          />
          <CheckoutInput
            value={checkoutInfo.email}
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutInfo, email: e.target.value })
            }
            label="Email"
          />
          <CheckoutInput
            value={checkoutInfo.phone}
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutInfo, phone: e.target.value })
            }
            label="Phone"
          />
          <CheckoutInput
            value={checkoutInfo.address}
            onChange={(e) =>
              setCheckoutInfo({ ...checkoutInfo, address: e.target.value })
            }
            label="Address"
          />
          <Button
            onClick={handleCheckout}
            color="green"
            className="bg-green-500 hover:bg-green-600 transition-colors ease-in-out text-white font-semibold p-2 rounded-lg"
          >
            Checkout
          </Button>
        </div>
        <ToastContainer />
      </div>
    </Modal>
  );
};
export default CheckoutModal;
