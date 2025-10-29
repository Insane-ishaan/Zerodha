import React, { useState } from "react";
import { watchlist } from "../Data/data";
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

function LeftDashBoard() {
  return (
    <div>
      <ul className="list-group mt-3 mb-1 ms-1 ">
        <li className="list-group-item">
          <span className="me-5 text-body-secondary">
            Search eg:infy,base,nifty full weekly,gold mcx
          </span>
          <span className="ms-5 text-body-secondary">
            {watchlist.length}/50
          </span>
        </li>
      </ul>
      <ul className="list-group">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default LeftDashBoard;

const WatchListItem = ({ stock }) => {
  const [selectOption, setSelectOption] = useState(false);

  const handleMouseEnter = (e) => {
    setSelectOption(true);
  };

  const handleMouseLeave = (e) => {
    setSelectOption(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="list-group-item list-group-item-action border-0 border-top border-bottom"
    >
      <div className="d-flex">
        <p className={stock.isDown ? "loss" : "profit"}>{stock.name}</p>
        <div className="data-items ms-auto">
          <span>{stock.percent}</span>
          <span>
            {stock.isDown ? (
              <KeyboardArrowDown className="loss" />
            ) : (
              <KeyboardArrowUp className="profit" />
            )}
          </span>
          <span className={stock.isDown ? "loss" : "profit"}>
            {stock.price}
          </span>
        </div>
      </div>
      {selectOption && <WatchListAction stock={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ stock }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="Sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="More (M)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
