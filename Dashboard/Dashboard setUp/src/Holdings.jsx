import { holdings } from "../Data/data";
import "./index.css";
function Holdings() {
  return (
    <div className="ms-5 mt-2">
      <h4 className="Holdings-heading">Holdings({holdings.length})</h4>
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
          </tr>
        </thead>
        <tbody>
          {holdings.map((value, index) => {
            const currVal = value.price * value.qty;
            const isProfit = currVal - value.avg >= 0.0;
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
              </tr>
            );
          })}
        </tbody>
      </table>

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
  );
}

export default Holdings;
