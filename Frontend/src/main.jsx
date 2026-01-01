import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./landingPage/home/HomePageWrapper.jsx";
import SignUp from "./landingPage/signUp/SignUp.jsx";
import AboutWrapper from "./landingPage/about/AboutWrapper.jsx";
import ProductWrapper from "./landingPage/products/ProductWrapper.jsx";
import PricingWrapper from "./landingPage/pricing/PricingWrapper.jsx";
import SupportWrapper from "./landingPage/support/SupportWrapper.jsx";
import SupportPage from "./notFound.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import SignIn from "./landingPage/SignIn/signIn.jsx";
import { FlashContextProvider } from "./FlashContext.jsx";

createRoot(document.getElementById("root")).render(
  <FlashContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/about" element={<AboutWrapper />}></Route>
        <Route path="/products" element={<ProductWrapper />}></Route>
        <Route path="/pricing" element={<PricingWrapper />}></Route>
        <Route path="/support" element={<SupportWrapper />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<SupportPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </FlashContextProvider>
);
