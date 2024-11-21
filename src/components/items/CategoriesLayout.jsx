/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoriesLayout = () => {
  const [categories, setCategories] = useState();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/categories.json");
      setCategories(response.data.categories);

      // Automatically navigate to the first category if it exists
      if (response.data.categories && response.data.categories.length > 0) {
        navigate(`/categories/all`);
      }
    } catch (err) {
      console.log("Failed to load categories.");
    }
  };

  const getNavLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-3xl min-w-[150px] ${
      isActive ? "bg-[#9538E2] text-white" : "bg-gray-100 text-gray-800"
    }`;

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-row justify-between space-x-14 mx-28 mt-[300px]">
      <div>
        <div className="rounded-lg bg-white shadow p-5 h-auto flex flex-col gap-2">
          <NavLink to={`/categories/all`} className={getNavLinkClass}>
            All Products
          </NavLink>
          {categories &&
            categories.map((category) => (
              <NavLink
                key={category.name}
                to={`/categories/${category.name}`}
                className={getNavLinkClass}
              >
                {category.name}
              </NavLink>
            ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CategoriesLayout;
