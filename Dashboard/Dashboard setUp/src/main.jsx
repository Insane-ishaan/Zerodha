import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./TopBar.jsx";
import "./index.css";
import Index from "./index.jsx";
import Dashboard from "./Dashboard.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
