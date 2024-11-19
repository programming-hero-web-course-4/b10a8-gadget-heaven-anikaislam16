import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./components/home/Home";

import ProductDetails from "./components/productDetails/ProductDetails";
import ErrorPage from "./ErrorPage";
import Dashboard from "./components/dashboard/Dashboard";
import Statistics from "./components/statistics/Statistics";
import BlogList from "./components/blog/BlogList";
import BlogItem from "./components/blog/BlogItem";

const router = createBrowserRouter([
  {
    path: "/", // Wrap valid pages with MainLayout
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/product/:model", element: <ProductDetails /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/stat", element: <Statistics /> },
      {
        path: "/blog",
        element: <BlogList />,
      },
      { path: "/blog/:id", element: <BlogItem /> },
    ],
  },
  {
    path: "*", // Catch-all route for unmatched URLs
    element: <ErrorPage />, // No MainLayout for ErrorPage
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
