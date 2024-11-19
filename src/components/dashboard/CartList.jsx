/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/ContextProvider";
import CartItem from "./CartItem";
import axios from "axios";
const CartList = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const fetchDevices = async () => {
    try {
      const response = await axios.get("/Devices.json");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  // Find the product that matches the model
  useEffect(() => {
    fetchDevices();
  }, []);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const filteredProducts = cartItems.flatMap((cartItem) =>
      products.filter((product) => product.model === cartItem)
    );

    setCartProducts(filteredProducts);
  }, [products]);
  useEffect(() => {
    if (cartProducts && cartProducts.length > 0) {
      const totalPrice = cartProducts.reduce(
        (total, product) => total + product.price,
        0
      );
      console.log(totalPrice);
      setPrice(totalPrice);
    }
  }, [cartProducts]);

  const handleSortByPrice = () => {
    const sortedProducts = [...cartProducts].sort((a, b) => a.price - b.price);
    setCartProducts(sortedProducts);
  };

  const handlePurchase = () => {
    alert("Purchase successful!");
    setCartProducts([]);
    localStorage.setItem("cart", JSON.stringify([])); // Clear cart in local storage
  };
  return (
    <div className="mx-28">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg my-6">Cart</h1>
        <div className="flex items-center space-x-3">
          <div className="text-gray-600 text-lg font-bold">
            Total Price: ${price}
          </div>
          <button
            onClick={handleSortByPrice}
            className="bg-purple-600 text-white px-4 py-2 rounded-2xl shadow-lg hover:bg-purple-700"
          >
            Sort By Price
          </button>
          <button
            onClick={handlePurchase}
            className="bg-purple-600 text-white px-4 py-2 rounded-2xl shadow-lg hover:bg-purple-700"
          >
            Purchase
          </button>
        </div>
      </div>
      {cartProducts &&
        cartProducts.map((item) => {
          return <CartItem key={item.model} item={item} />;
        })}
    </div>
  );
};

export default CartList;
