import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../Data/data";

function watchItem({ watchVal }) {
  const [showWatchListAction, setWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setWatchListAction(true);
  };

  const handleMouseLeave = (e) => {
    setWatchListAction(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={watchVal.isDown ? "loss" : "profit"}>
        {watchVal.name}
        <div className="list-item">
          <span>{watchVal.price}</span>
          <span>{watchVal.percentage}</span>
        </div>
      </div>
    </li>
  );
}

export default watchItem;
