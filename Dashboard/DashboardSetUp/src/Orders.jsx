import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TradeContext } from "./TradeContext";
import { useNavigate } from "react-router-dom";
function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const { openBuyWindow, stockName, stockPrice } = useContext(TradeContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEBACKEND_URL}/allOrders`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllOrders(res.data);
      });
  }, []);

  const handleOpen = () => {
    openBuyWindow("WIPRO", 577.75);
  };
  return (
    <div className="orders ms-5">
      {allOrders.length === 0 ? (
        <div className="order-NoOrders">
          <h4 className="text-body-secondary mb-5 display-6">
            You haven't place any order yet
          </h4>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleOpen}
          >
            Make Purchase
          </button>
        </div>
      ) : (
        <div className="orders-WithOrders">
          <table className="table table-striped ms-5">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Total Price</th>
                <th scope="col">Price/Unit</th>
                <th scope="col">Quantity</th>
                <th scope="col">Mode</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((OrderData, idx) => (
                <tr key={idx}>
                  <th scope="row">{OrderData.name}</th>
                  <td>{OrderData.totalPrice.toFixed(2)}</td>
                  <td>{OrderData.pricePerUnit}</td>
                  <td>{OrderData.qty}</td>
                  <td>{OrderData.mode}</td>
                  <td>
                    {new Date(OrderData.createdAt).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
