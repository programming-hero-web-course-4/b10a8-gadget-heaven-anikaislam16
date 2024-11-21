/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Device = ({ device }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10 w-[300px] h-[300px]">
          <img
            src={device.image}
            alt="Shoes"
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-left text-xl">{device.model}</h2>
          <p className="text-gray-400">Price: ${device.price}</p>
          <div className="card-actions">
            <button
              className="btn bg-white border-2 border-[#9538E2] rounded-3xl text-[#9538E2]"
              onClick={() => {
                navigate(`/product/${device.model}`);
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
