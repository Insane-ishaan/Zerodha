import "./pricing.css";
function Brokerage() {
  return (
    <div className="container text-center">
      <div className="row Brokerage">
        <div className="col-4">
          <img src="Images/pricing0.svg" alt="" />
          <h4>Free equity delivery</h4>
          <p>
            All equity delivery investments (NSE, BSE), <br></br> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="Images/intradayTrades.svg" alt="" />
          <h4>Intraday and F&O trades</h4>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per <br></br>executed order
            on intraday trades across <br></br>equity, currency, and commodity
            trades. Flat<br></br> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="Images/pricingMF.svg" alt="" />
          <h4>Free direct MF</h4>
          <p>
            All direct mutual fund investments are <br></br>absolutely free — ₹
            0 commissions & DP <br></br>charges..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
