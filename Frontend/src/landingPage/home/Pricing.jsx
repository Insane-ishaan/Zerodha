function Pricing() {
  return (
    <div className="container mb-5">
      <h3>Unbeatable pricing</h3>
      <div className="row">
        <div className="col-6">
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href=""
            className="fs-5 ms-1"
            style={{ textDecorationLine: "none" }}
          >
            See pricing<i className="fa-solid fa-arrow-right p-2"></i>
          </a>
        </div>
        <div className="col-6">
          <img
            src="/Images/unbeatabkePricing.png"
            alt="unbeatablePricing"
            style={{ width: "90%", marginTop: "-15px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
