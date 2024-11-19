/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Device from "./Device";
import { context } from "../context/ContextProvider";
const Categories = () => {
  const { products, setProducts } = useContext(context);
  const [categories, setCategories] = useState([]);
  const [devices, setDevices] = useState([]); // State to store devices
  const [activeCategory, setActiveCategory] = useState("all"); // Default to 'all'
  const [filteredDevices, setFilteredDevices] = useState([]); // State to store filtered devices
  const fetchCategories = async () => {
    try {
      const response = await axios.get("categories.json");
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };
  // Fetch devices from devices.json
  const fetchDevices = async () => {
    try {
      const response = await axios.get("Devices.json");
      setDevices(response.data.products); // Assuming the data is in response.data.devices

      setFilteredDevices(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  // Filter devices based on the selected category
  useEffect(() => {
    fetchCategories();
    fetchDevices();
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setProducts(devices);
      setFilteredDevices(devices); // Show all devices if "all" is selected
    } else {
      setFilteredDevices(
        devices.filter((device) => device.category === activeCategory)
      ); // Filter by category
      setProducts(
        devices.filter((device) => device.category === activeCategory)
      );
      console.log(products);
    }
  }, [activeCategory, devices]);
  const handleButtonClick = (categoryName) => {
    setActiveCategory(categoryName); // Set active category
  };
  return (
    <div className="flex flex-row justify-between space-x-14">
      <div className="">
        <div className="rounded-lg bg-white shadow p-5 h-auto flex flex-col gap-2">
          <button
            className={`px-4 py-2 rounded-2xl ${
              activeCategory === "all"
                ? "bg-[#9538E2] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleButtonClick("all")}
          >
            All Products
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-2xl ${
                activeCategory === category.name
                  ? "bg-[#9538E2] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleButtonClick(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredDevices &&
          filteredDevices.map((device, index) => {
            return <Device key={index} device={device} />;
          })}
      </div>
    </div>
  );
};

export default Categories;
