/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Item from "../items/Item";
import Footer from "../footer/Footer";
import CategoriesLayout from "../items/CategoriesLayout";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoriesLayout />
    </div>
  );
};

export default Home;
