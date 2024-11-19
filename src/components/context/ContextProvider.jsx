/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const context = createContext(null); // Create context

const ContextProvider = ({ children }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wish = JSON.parse(localStorage.getItem("wish")) || [];

  const [products, setProducts] = useState([]); // State management
  const [cartItems, setCartItems] = useState(cart);
  const [wishedItems, setWishedItems] = useState(wish);
  return (
    <context.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        wishedItems,
        setWishedItems,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
