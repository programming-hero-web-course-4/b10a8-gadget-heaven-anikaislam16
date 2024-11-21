/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./components/home/Home";
import Item from "./components/items/Item";
import ProductDetails from "./components/productDetails/ProductDetails";
import ErrorPage from "./ErrorPage";
import Dashboard from "./components/dashboard/Dashboard";
import Statistics from "./components/statistics/Statistics";
import BlogList from "./components/blog/BlogList";
import BlogItem from "./components/blog/BlogItem";
import Categories from "./components/items/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/categories/:categoryName",
            element: <Categories />,
          },
        ],
      },

      {
        path: "/product/:model",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/stat", // Statistics route
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <BlogList />,
      },
      {
        path: "/blog/:id",
        element: <BlogItem />,
      },
    ],
  },
  {
    path: "*", // Catch-all route for unmatched URLs
    element: <ErrorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
