/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center flex  items-center flex-col bg-[#9538E2] space-y-4 py-4 relative h-[500px] mt-10">
      <p className="text-white text-4xl font-bold px-32 py-6">
        Upgrade Your Tech Accessorize with <br></br>Gadget Heaven Accessories
      </p>
      <p className="text-white">
        Explore the latest gadgets that will take your experience to the next
        level. <br></br>From smart devices to the coolest accessories, we have
        it all!
      </p>
      <button
        className="bg-white w-28 h-12 text-[#9538E2] font-semibold py-2 px-4 rounded-3xl"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Shop Now
      </button>
      <div className="absolute top-[300px] border-2 p-4 rounded-lg bg-white  bg-opacity-50 ">
        <div className="relative max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="/assets/banner.jpg"
            alt="Featured Gadget"
            className="w-[600px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
