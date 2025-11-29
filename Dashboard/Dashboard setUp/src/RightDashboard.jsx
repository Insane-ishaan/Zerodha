function RightDashboard() {
  return (
    <div className="row m-5">
      <div className="h2 pb-5">Hi , User</div>
      <div
        className="border border-top mb-4 mt-3"
        style={{ color: "#000" }}
      ></div>
      <div className="mb-5">
        <div className="mb-5">
          <i className="fa-regular fa-clock" style={{ color: "black" }}></i>
          Equity
        </div>
        <div className="row">
          <div className="col-6  border-end border-dark-subtle">
            <p className="mt-4 mb-4 h1 display-4">3.74K</p>
            <p className="text-body-tertiary">margin available</p>
          </div>
          <div className="col-6 ps-5">
            <p style={{ color: "#acaaaa" }}>Balance used 0</p>
            <p style={{ color: "#acaaaa", marginTop: "-1rem" }}>
              Open Balance 3.74K
            </p>
          </div>
        </div>
      </div>
      <div
        className="border border-top mb-4 mt-3"
        style={{ color: "#000" }}
      ></div>
      <div className="mb-5">
        <div className="mb-5">
          <i className="fa-solid fa-file"></i>Holdings(13)
        </div>
        <div className="row">
          <div className="col-6  border-end border-dark-subtle">
            <p
              className="mt-4 mb-4 h1 display-4"
              style={{ color: "#62ff68ff" }}
            >
              1.55K
            </p>
            <p className="text-body-tertiary">P&L</p>
          </div>
          <div className="col-6 ps-5">
            <p style={{ color: "#acaaaa" }}>Current Value : 31.43k</p>
            <p style={{ color: "#acaaaa", marginTop: "-1rem" }}>
              Investment : 29.88k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightDashboard;
