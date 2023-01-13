import React from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addItem = (itemId, quantity) => {
    console.log(itemId, quantity);
    const newItem = { itemId, quantity };
    setCartItems([...cartItems, newItem]);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => React.useContext(CartContext);

export { CartContextProvider, useCartContext };
