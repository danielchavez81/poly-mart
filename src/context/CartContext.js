import React from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
