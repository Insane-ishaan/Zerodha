import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { TradeContext } from "./TradeContext";
import "./BuyActionWindow.css";
import { FlashContext } from "./FlashContext";

import axios from "axios";

export default function BuyActionWindow() {
  const { closeBuyWindow, stockName, stockPrice } = useContext(TradeContext);
  /*   const [isStockPrice, setIsStockPrice] = useState(0.0); */
  const [stockQuantity, setStockQuantity] = useState(1);
  const { showFlash } = useContext(FlashContext);
  const totalPrice = stockPrice * stockQuantity;
  const avgPrice = totalPrice / stockQuantity;

  const handleCloseWindow = () => {
    closeBuyWindow();
  };

  const handleNewOrder = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEBACKEND_URL}/newOrder`,
        {
          name: stockName,
          totalPrice: totalPrice,
          pricePerUnit: stockPrice,
          qty: stockQuantity,
          mode: "BUY",
        },
        {
          withCredentials: true,
        }
      );

      showFlash(
        "success",
        res.data?.message || "New Order Placed Successfully"
      );
      closeBuyWindow();
    } catch (err) {
      showFlash("error", err.response?.data?.message || "Something went wrong");
    }
  };

  const handleNewHoldings = () => {
    axios.post(
      `${import.meta.env.VITE_BASEBACKEND_URL}/newHoldings`,
      {
        name: stockName,
        qty: stockQuantity,
        avg: avgPrice,
        price: stockPrice,
      },
      {
        withCredentials: true,
      }
    );

    closeBuyWindow();
  };

  const handleBuy = () => {
    handleNewOrder();
    handleNewHoldings();
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "30ch" } }}
      noValidate
      autoComplete="off"
      className="buyWindow"
    >
      <div className="BuyWindowContainer">
        <fieldset>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="qty"
              className="form-control"
              id="qty  floatingInput"
              min={1}
              defaultValue={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
            <label htmlFor="floatingInput">Qty.</label>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="price"
              id="price floatingInput"
              step={0.05}
              min={1}
              value={totalPrice.toFixed(2)}
              readOnly
            />
            <label htmlFor="floatingInput">Price</label>
          </div>
        </fieldset>
        <p>
          {stockName} Price/Unit <b>:</b> ₹{stockPrice.toFixed(2)}
        </p>
        <div className="button buySEllBtn">
          <div className="btn btn-primary BuyBtn" onClick={handleBuy}>
            Buy
          </div>
          <div className="btn btn-danger cancelBtn" onClick={handleCloseWindow}>
            Cancel
          </div>
        </div>
      </div>
    </Box>
  );
}
