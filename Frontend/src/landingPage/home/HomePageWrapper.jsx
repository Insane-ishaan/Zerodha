import Hero from "./Hero";
import TrustStats from "./TrustStats";
import Pricing from "./Pricing";
import Education from "./Education";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import OpenAcc from "../../OpenAccount";
import AboutWrapper from "../about/AboutWrapper";
import PricingWrapper from "../pricing/PricingWrapper";
import ProductWrapper from "../products/ProductWrapper";
import SignUpWrapper from "../signUp/SignUpWrapper";
import SupportWrapper from "../support/SupportWrapper";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <OpenAcc />
      <TrustStats />
      <Pricing />
      <Education />
      {/* <AboutWrapper/> */}
     {/*  <PricingWrapper/> */}
    {/*  <ProductWrapper/> */}
    {/* <SignUpWrapper/> */}
    {/* <SupportWrapper/> */}
      <Footer />
    </>
  );
}

export default HomePage;
