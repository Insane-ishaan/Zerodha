import React, { useContext, useState } from "react";
import { watchlist } from "../Data/data";
import WatchListAction from "./WatchListAction";
import "./index.css";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

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
      <ul className="list-group mt-3">
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
      <div className="d-flex list-group-item list-group-item-action list-group-item-light">
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
            ₹{stock.price}
          </span>
        </div>
        {selectOption && (
          <div className="watchlist-popup">
            <WatchListAction stockName={stock.name} stockPrice={stock.price} />
          </div>
        )}
      </div>
    </li>
  );
};
