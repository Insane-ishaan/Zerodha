import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import { TradeContext } from "./TradeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function WatchListAction({ stockName, stockPrice }) {
  const navigate = useNavigate();
  const { openBuyWindow } = useContext(TradeContext);

  const handleOpen = () => {
    openBuyWindow(stockName, stockPrice);
  };

  const handleOpenAnalytics = async () => {
    navigate("/summary");
  };

  const handleOpenMore = () => {
    navigate("/apps");
  };

  return (
    <span className="actions watchList">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy border rounded-2 me-2 btn btn-primary"
            onClick={handleOpen}
          >
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="action border-0 icons"
            onClick={handleOpenAnalytics}
          >
            <BarChartOutlined className="icon text-info" />
          </button>
        </Tooltip>
        <Tooltip
          title="More (M)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn border-0 ext-body-tertiary icons">
            <MoreHoriz className="icon" onClick={handleOpenMore} />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}

export default WatchListAction;
