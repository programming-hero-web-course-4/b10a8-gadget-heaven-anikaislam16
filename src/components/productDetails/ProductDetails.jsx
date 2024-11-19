/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/ContextProvider";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { addCartItems, addWishedItems } from "../../helpter";
const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const { model } = useParams();
  const [isDisabled, setIsDisabled] = useState(false);
  const { cartItems, setCartItems, wishedItems, setWishedItems } =
    useContext(context);
  const [product, setProduct] = useState(null);
  const fetchDevices = async () => {
    try {
      const response = await axios.get("/Devices.json");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (products && products.length > 0) {
      const matched = products.find((item) => item.model === model);
      console.log(matched);
      if (matched) {
        setProduct(matched);
      } else {
        console.error("Product not found");
      }
    }
  }, [products, model]);
  // Find the product that matches the model
  useEffect(() => {
    fetchDevices();
  }, []);
  useEffect(() => {
    if (product) {
      const wishlist = JSON.parse(localStorage.getItem("wish")) || [];
      const isModelInWishlist = wishlist.some(
        (item) => item.model === product.model
      );
      setIsDisabled(isModelInWishlist);
    }
  }, [product]);

  const handleWishlistClick = () => {
    addWishedItems(product.model);
    setWishedItems([...wishedItems, product.model]);
    toast.success("Item added to wishlist");
    setIsDisabled(true);
  };
  return (
    <div>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div className="text-center flex items-center flex-col bg-[#9538E2] space-y-4 py-4 relative h-[500px] mt-10">
        <p className="text-white text-4xl font-bold px-32 py-6">
          Product Details
        </p>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level.
          <br />
          From smart devices to the coolest accessories, we have it all!
        </p>

        {product && (
          <div className="max-w-[70%] mx-auto p-6 bg-white shadow-lg rounded-lg border-2">
            <div className="flex items-center space-x-6 text-left">
              <div className=" bg-gray-200 rounded-lg w-[400px] h-auto">
                <img
                  src={product.image}
                  alt={product.model}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-semibold">{product.model}</h2>
                <p className="text-lg text-gray-600 font-bold">
                  Price: ${product.price}
                </p>
                {product.inStock && (
                  <p className="text-sm text-center bg-green-100 text-green-700 px-2 py-1 rounded-full w-28">
                    In Stock
                  </p>
                )}
                {!product.inStock && (
                  <p className="text-sm text-center bg-red-100 text-red-700 px-2 py-1 rounded-full w-28">
                    Out of Stock
                  </p>
                )}
                <p className="text-gray-700 mt-2">{product.description}</p>
                <div className="mt-4">
                  <h3 className="font-medium">Specifications:</h3>
                  <ul className="list-none list-inside text-gray-600">
                    {product.specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center mt-4">
                  <Rating
                    initialRating={product.rating}
                    emptySymbol="fa fa-star-o text-gray-400"
                    fullSymbol="fa fa-star text-yellow-500"
                    fractions={2}
                    readonly
                  />
                  <span className="ml-2 text-gray-700">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center gap-4 ">
                  {product.inStock && (
                    <button
                      className=" bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700"
                      onClick={() => {
                        setCartItems([...cartItems, product.model]);
                        toast.success("Item added to cart");
                        addCartItems(product.model);
                      }}
                    >
                      Add To Cart
                    </button>
                  )}
                  <button
                    title="Add to Wishlist"
                    disabled={isDisabled}
                    onClick={handleWishlistClick}
                    className={`h-10 w-10 ${
                      isDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <img
                      src="/assets/heart.png"
                      alt="Add to Wishlist"
                      className="h-full w-full"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
