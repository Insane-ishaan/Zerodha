import OpenAcc from "../../OpenAccount";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductWrapper() {
  return (
    <div>
      <Hero />
      <LeftSection
        leftImg="/Images/kite.png"
        leftHeading="Kite"
        leftDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        leftDemohref=""
        leftDemo="Try Demo"
        leftLearnMore="Learn More"
        leftLearnMorehref=""
        leftGoggleStore="/Images/googlePlayBadge.svg"
        leftAppStore="/Images/appstoreBadge.svg"
      />
      <RightSection
        rightHeading="Console"
        rightDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations."
        rightLearnMorehref=""
        rightLearnMore="Learn more"
        rightImg="/Images/console.png"
      />
      <LeftSection
        leftImg="/Images/coin.png"
        leftHeading="Coin"
        leftDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        leftDemohref=""
        leftDemo="Coin"
        leftLearnMore="Learn More"
        leftLearnMorehref=""
        leftGoggleStore="/Images/googlePlayBadge.svg"
        leftAppStore="/Images/appstoreBadge.svg"
      />
      <RightSection
        rightHeading="Kite Connect API"
        rightDescription="TBuild powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        rightLearnMorehref=""
        rightLearnMore="Kite Connect"
        rightImg="/Images/kiteconnect.png"
      />
      <LeftSection
        leftImg="/Images/varsity.png"
        leftHeading="Varsity mobile"
        leftDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        leftDemohref=""
        leftDemo="Try Demo"
        leftLearnMore="Learn More"
        leftLearnMorehref=""
        leftGoggleStore="/Images/googlePlayBadge.svg"
        leftAppStore="/Images/appstoreBadge.svg"
      />
      <p className="mt-5 mb-5 text-center fs-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
      <OpenAcc />
    </div>
  );
}

export default ProductWrapper;
