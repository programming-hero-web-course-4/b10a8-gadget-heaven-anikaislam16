/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-10 bg-white border-gray-300 py-10 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold">Gadget Heaven</h1>
        <p className="text-gray-600 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
