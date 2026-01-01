import { useContext } from "react";
import DoughnutChart from "./DoughnutChart";
import { TradeContext } from "./TradeContext";

function Summary() {
  const { stockName, stockPrice } = useContext(TradeContext);

  const data = {
    labels: [
      "INFY",
      "TCS",
      "KPITTECH",
      "QUICKHEAL",
      "WIPRO",
      "M&M",
      "RELIANCE",
      "HUL",
    ],
    datasets: [
      {
        label: "Current Stock Prices",
        data: [1555, 116, 3194, 266, 308, 577, 779, 2112],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="ms-5 mt-2 d-flex flex-column ">
      <h1 className="display-5 ms-auto">Stock Summary</h1>
      <div style={{ marginLeft: "5rem", height: "80vh" }}>
        <DoughnutChart data={data} />
      </div>
    </div>
  );
}

export default Summary;
