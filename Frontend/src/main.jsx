import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./landingPage/home/HomePageWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
