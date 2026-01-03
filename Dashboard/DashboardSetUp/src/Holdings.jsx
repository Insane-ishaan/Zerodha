/* import { holdings } from "../Data/data"; */
import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./index.css";
import { FlashContext } from "./FlashContext";
import BarCharts from "./BarCharts";

function Holdings() {
  const [allHolding, setAllHolding] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedHolding, setSelectedHolding] = useState(null);
  const [sellQty, setSellQty] = useState(1);
  const { showFlash } = useContext(FlashContext);

  const handleClick = (event, holding) => {
    setAnchorEl(event.currentTarget);
    setSelectedHolding(holding);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedHolding(null);
    setSellQty(1);
  };

  const open = Boolean(anchorEl);

  const handleSell = async () => {
    try {
      if (!selectedHolding) {
        return;
      }
      if (sellQty <= 0 || sellQty > selectedHolding.qty) {
        showFlash("error", "No enough quantity to sell");
        return;
      }
      const totalPrc = selectedHolding.price * sellQty;

      const res = await axios.post(
        `${import.meta.env.VITE_BASEBACKEND_URL}/sell`,
        {
          name: selectedHolding.name,
          totalPrice: totalPrc,
          pricePerUnit: selectedHolding.price,
          qty: sellQty,
          mode: "SELL",
        },
        {
          withCredentials: true,
        }
      );
      showFlash("success", res.data?.message || "Holdings sell successfully");
      handleClose();
    } catch (err) {
      showFlash("error", err.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEBACKEND_URL}/allHoldings`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllHolding(res.data);
      });
  }, []);

  const labels = allHolding.map((stock) => stock["name"]);
  const currVal = allHolding.map((value) => value.price * value.qty);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHolding.map((stock) => stock.price),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Quantities Own",
        data: allHolding.map((value) => value.qty),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return allHolding.length > 0 ? (
    <div className="mt-2 ms-5">
      <h4 className="Holdings-heading ms-5">Holdings({allHolding.length})</h4>
      <div className="ms-5 mt-2">
        <table className="table table-striped holdings-table">
          <thead>
            <tr>
              <th scope="col">Instrument</th>
              <th scope="col">Qty</th>
              <th scope="col">Average Cost</th>
              <th scope="col">Price</th>
              <th scope="col">Curr. Val</th>
              <th scope="col">P&L</th>
              <th scope="col">Net</th>
              <th scope="col">Day</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allHolding.map((value, index) => {
              const currVal = value.price * value.qty;
              const isProfit = Number(currVal) - Number(value.avg) >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayProfit = value.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <th scope="row">{value.name}</th>
                  <td>{value.qty}</td>
                  <td>{value.avg.toFixed(2)}</td>
                  <td>{value.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - value.avg * value.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{value.net}</td>
                  <td className={dayProfit}>{value.day}</td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={(e) => handleClick(e, value)}
                      defaultValue={sellQty}
                      className="btn btn-danger"
                    >
                      Sell
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Typography component="div" sx={{ padding: "16px" }}>
            <fieldset>
              <p>
                Selling: <strong>{selectedHolding?.name}</strong>
              </p>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  min={1}
                  max={selectedHolding?.qty}
                  defaultValue={sellQty}
                  onChange={(e) => setSellQty(e.target.value)}
                />
                <label>Qty.</label>
              </div>

              <div className="d-flex">
                <button className="btn btn-danger ms-auto" onClick={handleSell}>
                  Done
                </button>
              </div>
            </fieldset>
          </Typography>
        </Popover>
        <BarCharts data={data} />
        <div className="holdings-result ">
          <h3 className="display-6">29,875</h3>
          <h3 className="display-6">31,428</h3>
          <h3 className="display-6" style={{ color: "rgba(32, 197, 17, 1)" }}>
            1,553.40(+5.20%)
          </h3>
        </div>
        <div className="holdings-sub-result ">
          <p>55</p>
          <p className="ms-4">95</p>
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div className="holdings-result-conclusion mt-5 row">
          <p className="col-4">Total investment</p>
          <p className="col-4">Current value</p>
          <p className="col-4">P&L</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="order-NoOrders d-flex ms-5 justify-content-center mt-5">
      <h4 className="text-body-secondary  display-6 mt-5 ms-5">
        You haven't hold any holding yet
      </h4>
    </div>
  );
}

export default Holdings;
