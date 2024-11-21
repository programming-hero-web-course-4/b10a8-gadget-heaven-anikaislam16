/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Device from "./Device";

const Categories = () => {
  const { categoryName } = useParams(); // Get the active category from the route
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      console.log(categoryName);
      try {
        setLoading(true);
        const response = await axios.get("/Devices.json");
        const allDevices = response.data.products;
        console.log(response.data.products);

        const filteredDevices =
          categoryName === "all"
            ? allDevices
            : allDevices.filter((device) => device.category === categoryName);

        setDevices(filteredDevices);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Failed to load devices.");
      }
    };

    fetchDevices();
  }, [categoryName]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && devices.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {devices.map((device) => (
            <Device key={device.id} device={device} />
          ))}
        </div>
      ) : (
        !loading && <p>No devices found.</p>
      )}
    </div>
  );
};

export default Categories;
