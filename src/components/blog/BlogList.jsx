/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchDevices = async () => {
    try {
      const response = await axios.get("/blog.json");
      setProducts(response.data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="mx-28 mt-16">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-center my-6">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {products &&
          products.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 flex justify-between"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/blog/${item.id}`);
              }}
            >
              <h1 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h1>
              <div>
                <img
                  src="/assets/greater-than-symbol.png"
                  alt=""
                  className="h-10 w-10"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/blog/${item.id}`);
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
