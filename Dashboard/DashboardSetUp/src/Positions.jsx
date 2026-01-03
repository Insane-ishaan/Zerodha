/* import { positions } from "../Data/data"; */
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";

function Positions() {
  const [allPositions, setPositions] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEBACKEND_URL}/allPositions`, {
        withCredentials: true,
      })
      .then((res) => setPositions(res.data));
  }, []);
  return (
    <div className="ms-5 mt-2">
      <h4 className="positions-heading ms-5">
        positions({allPositions.length})
      </h4>
      <table className="table table-striped positions-table ms-5">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Average</th>
            <th scope="col">Price</th>
            <th scope="col">Curr. Val</th>
            <th scope="col">P&L</th>
            <th scope="col">Net</th>
            <th scope="col">Day</th>
          </tr>
        </thead>
        <tbody>
          {allPositions.map((value, index) => {
            const currVal = value.price * value.qty;
            const isProfit = currVal - value.avg >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayProfit = value.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <th scope="row">{value.product}</th>
                <td>{value.name}</td>
                <td>{value.qty}</td>
                <td>{value.avg.toFixed(2)}</td>
                <td>{value.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currVal - value.avg * value.qty).toFixed(2)}
                </td>
                <td className={profitClass}>{value.net}</td>
                <td className={dayProfit}>{value.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Positions;
