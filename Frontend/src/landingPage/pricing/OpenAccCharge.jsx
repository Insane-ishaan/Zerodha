import "./pricing.css";
function OpenAccCharge() {
  return (
    <div className="container mb-5">
      <div>
        <h3 className="mb-4">Charges for account opening</h3>
      </div>
      <table className="table border table-striped table-hover openAccChargeTable">
        <thead>
          <tr>
            <th scope="col">Type of account</th>
            <th scope="col">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr className="free-row">
            <td>Online account</td>
            <td className="free">Free</td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td className="free">Free</td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td> ₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td> ₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpenAccCharge;
