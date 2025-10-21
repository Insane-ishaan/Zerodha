import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./TopBar.jsx";
import "./index.css";
import Index from "./index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <BrowserRouter></BrowserRouter>
  </StrictMode>
);
