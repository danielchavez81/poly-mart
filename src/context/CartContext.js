import React from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addItem = (itemData, quantity) => {
    const newOrder = { ...itemData, quantity };
    setCartItems([...cartItems, newOrder]);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const updateItemQuantity = (itemId, quantity) => {
    const newCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });
    setCartItems(newCart);
  };

  const removeItem = (itemId) => {
    const newCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCart);
  };

  const checkItem = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        emptyCart,
        removeItem,
        checkItem,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => React.useContext(CartContext);

export { CartContextProvider, useCartContext };
