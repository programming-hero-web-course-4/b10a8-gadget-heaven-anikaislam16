/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Item from "../items/Item";
import Footer from "../footer/Footer";
import CategoriesLayout from "../items/CategoriesLayout";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <Banner />
      <CategoriesLayout />
    </div>
  );
};

export default Home;
