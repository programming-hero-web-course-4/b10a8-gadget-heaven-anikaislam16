/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { context } from "../context/ContextProvider";
export default function Navbar() {
  const { cartItems, wishedItems } = useContext(context);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-between backdrop-blur-md items-center px-24 py-3 ${
        isHomePage ? "bg-[#9538E2] text-white" : "bg-white text-black"
      } `}
    >
      <div className=" font-semibold">Gadget Heaven</div>
      <nav className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold no-underline" : "no-underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive ? "font-semibold no-underline" : " no-underline"
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? " font-semibold no-underline" : " no-underline"
          }
        >
          Dashboard
        </NavLink>
      </nav>
      <div className="flex space-x-5 ">
        <div className="relative">
          <div className="bg-white rounded-full p-2 h-10 w-10">
            <img
              src="/assets/shopping-cart.png"
              alt=""
              className="h-full w-full"
            />
          </div>
          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cartItems.length}
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-full p-2 h-10 w-10">
            <img src="/assets/heart.png" alt="" className="h-full w-full" />
          </div>
          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {wishedItems.length}
          </div>
        </div>
      </div>
    </div>
  );
}
