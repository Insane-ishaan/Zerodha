import "./pricing.css";

function AddedServiceCharge() {
  return (
    <div className="container mt-5 mb-4">
      <h4 className="mb-4">Charges for optional value added services</h4>
      <div className="AddedServiceTable">
        <table className="table mb-5 border">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Billing Frquency</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody className="table-group-divider mb-5 ">
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
        <b> Disclaimer</b>
        <p className="fw-light">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default AddedServiceCharge;
