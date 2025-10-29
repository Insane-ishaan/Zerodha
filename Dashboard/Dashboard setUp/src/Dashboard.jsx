import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftDashBoard from "./LeftDashBoard";
import Home from "./Home";
import Summary from "./DashSummary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

function Dashboard() {
  return (
    <div className="row">
      <div className="col-4">
        <LeftDashBoard />
      </div>
      <div className="col-6">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
