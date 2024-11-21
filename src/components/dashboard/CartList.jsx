/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context/ContextProvider";
import CartItem from "./CartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CartList = () => {
  const { setCartItems } = useContext(context);
  const [count, setCount] = useState(0);
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
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Ensure cartProducts only includes valid products from the cart
    const filteredProducts = cartItems.map((cartItem) =>
      products.find((product) => product.model === cartItem)
    );

    setCartProducts(filteredProducts.filter((product) => product)); // Remove undefined
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
    console.log(cartProducts);
    const sortedProducts = [...cartProducts].sort((a, b) => b.price - a.price);
    console.log(sortedProducts);
    setCartProducts(sortedProducts);
  };

  const handlePurchase = () => {
    modalRef.current.showModal();
    setPrice(0);
    setCartItems([]);
    //navigate("/");
    setCartProducts([]);
    localStorage.setItem("cart", JSON.stringify([])); // Clear cart in local storage
  };
  const deleteItem = (model) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = cartItems.indexOf(model);
    if (itemIndex > -1) {
      cartItems.splice(itemIndex, 1);
    }

    // Update localStorage and state
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartItems(cartItems);

    toast.success("Deleted from Cart");

    // Update cartProducts state
    const updatedCartProducts = [...cartProducts];
    const productIndex = updatedCartProducts.findIndex(
      (p) => p.model === model
    );
    if (productIndex > -1) {
      updatedCartProducts.splice(productIndex, 1);
    }
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
        <h1 className="font-bold text-lg my-6">Cart</h1>
        <div className="flex items-center space-x-3">
          <div className="text-gray-600 text-lg font-bold">
            Total Price: ${price}
          </div>
          <button
            onClick={handleSortByPrice}
            className="bg-white border-purple-600 border-2 font-semibold text-purple-600 px-4 py-2 rounded-3xl shadow-lg "
          >
            Sort By Price
          </button>
          <button
            onClick={handlePurchase}
            disabled={cartProducts.length === 0}
            className={`px-4 py-2 rounded-3xl shadow-lg font-semibold ${
              cartProducts.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      {cartProducts &&
        cartProducts.map((item, index) => {
          return <CartItem key={index} item={item} deleteItem={deleteItem} />;
        })}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <p className="py-4 font-bold text-purple-500 text-xl">
            Congratulatons!!! your purchase is successful
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartList;
