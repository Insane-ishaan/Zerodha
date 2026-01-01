import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./TopBar.jsx";
import "./index.css";
import Dashboard from "./Dashboard.jsx";
import { FlashContextProvider } from "./FlashContext.jsx";
import FlashToast from "./FlashToast.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlashContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </FlashContextProvider>
  </StrictMode>
);
