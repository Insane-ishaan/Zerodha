function Education() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
          <img
            src="/Images/education.svg"
            alt="educationImg"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-6">
          <h2 className="mb-5 fs-3 ">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecorationLine: "none" }}>
            Varsity<i className="fa-solid fa-arrow-right p-2 mb-5"></i>
          </a>
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecorationLine: "none" }}>
            TradingQ&A<i className="fa-solid fa-arrow-right p-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
