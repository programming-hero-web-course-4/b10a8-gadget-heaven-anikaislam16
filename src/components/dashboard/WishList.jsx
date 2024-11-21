/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context/ContextProvider";
import CartItem from "./CartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WishItem from "./WishItem";
import { toast } from "react-toastify";
const WishList = () => {
  const { setWishedItems } = useContext(context);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const modalRef = useRef(null);
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
    const cartItems = JSON.parse(localStorage.getItem("wish")) || [];
    console.log(cartItems);
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

  const deleteItem = (model) => {
    const cartItems = JSON.parse(localStorage.getItem("wish")) || [];
    const updatedCart = cartItems.filter((item) => item !== model);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setWishedItems(updatedCart);
    toast.success("Delete from WishList");
    const updatedCartProducts = cartProducts.filter(
      (product) => product.model !== model
    );
    setCartProducts(updatedCartProducts);

    // Recalculate the total price
    const updatedPrice = updatedCartProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    setPrice(updatedPrice);
  };

  return (
    <div className="mx-28">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg my-6">WishList</h1>
      </div>
      {cartProducts &&
        cartProducts.map((item, index) => {
          return <WishItem key={index} item={item} deleteItem={deleteItem} />;
        })}
    </div>
  );
};

export default WishList;
