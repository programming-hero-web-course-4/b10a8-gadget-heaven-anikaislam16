/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CartList from "./CartList";
import WishList from "./WishList";

const Dashboard = () => {
  const [active, setActive] = useState("cart");
  return (
    <div className="mt-10">
      <div className="text-center flex items-center flex-col bg-[#9538E2] space-y-4 py-4 relative h-[300px]">
        <p className="text-white text-4xl font-bold px-32 py-6">Dashboard</p>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level.
          <br />
          From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-2">
          <button
            className={`${
              active === "cart"
                ? "bg-white w-28 h-12 text-[#9538E2]"
                : "bg-[#9538E2] w-28 h-12 text-white"
            } font-semibold py-2 px-4 rounded-3xl border-2 border-white`}
            onClick={() => {
              setActive("cart");
            }}
          >
            Cart
          </button>
          <button
            className={`${
              active === "wish"
                ? "bg-white w-28 h-12 text-[#9538E2]"
                : "bg-[#9538E2] w-28 h-12 text-white"
            } font-semibold py-2 px-4 rounded-3xl border-2 border-white`}
            onClick={() => {
              setActive("wish");
            }}
          >
            WishList
          </button>
        </div>
      </div>
      {active === "cart" ? <CartList /> : <WishList />}
    </div>
  );
};

export default Dashboard;
