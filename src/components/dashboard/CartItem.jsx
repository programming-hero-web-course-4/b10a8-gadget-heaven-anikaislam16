/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CartItem = ({ item, deleteItem }) => {
  return (
    <div>
      {item && (
        <div className="border-2 p-4 w-full mx-auto h-auto mb-3  rounded-lg flex justify-between items-center ">
          <div className="flex gap-6 ">
            <div className="h-32 w-32 ">
              <img
                src={`${item.image}`}
                className="h-full w-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl">{item.model}</p>
              <p className="text-gray-600 text-lg">{item.description}</p>
              <p className="text-gray-600 text-lg font-bold">
                Price: ${item.price}
              </p>
            </div>
          </div>
          <div className="ml-10">
            <img
              src="../../../../../assets/delete.png"
              className="h-10 w-10"
              onClick={() => {
                deleteItem(item);
              }}
              alt=""
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
