import "./Hero.css";
function People() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6 text-center ceoImg ps-5 pt-3">
          <img src="Images/nithinKamath.jpg" alt="" />
          <h4 className="text-body-secondary mt-3 fs-5">Nithin Kamath</h4>
          <h5 className="text-body-tertiary mt-4 fs-6">Founder, CEO</h5>
        </div>
        <div className="col-6 pe-5">
          <h3 className="mb-5">People</h3>
          <p className="mt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
