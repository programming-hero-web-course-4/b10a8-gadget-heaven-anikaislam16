/* eslint-disable no-unused-vars */
import React from "react";
import Categories from "./Categories";
import { Outlet } from "react-router-dom"; // To render nested routes

const Item = () => {
  return (
    <div className="mt-72 flex mx-24">
      <Categories />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Item;
