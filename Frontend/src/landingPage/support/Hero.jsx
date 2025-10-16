import "./supportHero.css";
function Hero() {
  return (
    <div className="container-fluid mb-5 p-4" id="support-hero">
      <div id="support-wrapper">
        <h1 className="fw-lighter">Support Portal</h1>
        <button type="button" className="btn btn-primary ">
          My Ticket
        </button>
      </div>
      <div id="support-wrapper">
        <input
          className="form-control form-control-lg text-muted fs-6 pt-3 pb-3 mt-4"
          type="text"
          placeholder="Eg. How do i open my account , How do i activate F&Q..."
          aria-label=".form-control-lg example"
        ></input>
      </div>
    </div>
  );
}

export default Hero;
