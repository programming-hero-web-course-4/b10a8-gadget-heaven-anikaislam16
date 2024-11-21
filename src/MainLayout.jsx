/* eslint-disable no-unused-vars */
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS styles
import { Helmet } from "react-helmet-async";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Helmet>
          <title>Gadget Heaven</title>
        </Helmet>
        <Outlet /> {/* This renders the current child route */}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
