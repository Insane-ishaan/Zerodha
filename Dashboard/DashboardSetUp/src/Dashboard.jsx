import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftDashBoard from "./LeftDashBoard";
import Home from "./Home";
import Summary from "./DashSummary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Apps from "./Apps";
import { TradeContext, TradeContextProvider } from "./TradeContext";
import BuyActionWindow from "./BuyActionWindow";
import { useContext } from "react";
import FlashToast from "./FlashToast";
import "./index.css";

function Dashboard() {
  return (
    <TradeContextProvider>
      <DashboardContent />
    </TradeContextProvider>
  );
}

function DashboardContent() {
  const { isOpen } = useContext(TradeContext);
  return (
    <div className="row">
      <div className="col-3">
        <LeftDashBoard />
      </div>
      {isOpen ? (
        <div className="col-2">
          <BuyActionWindow />
        </div>
      ) : (
        ""
      )}
      <div className="col-7">
        <FlashToast />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
