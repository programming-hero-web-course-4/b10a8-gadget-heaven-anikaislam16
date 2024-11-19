/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import AppRouter from "./AppRouter";
import ContextProvider from "./components/context/ContextProvider";
import "font-awesome/css/font-awesome.min.css"; // Import FontAwesome styles
import { HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </ContextProvider>
  </React.StrictMode>
);
