import "./supportHero.css";
function Hero() {
  return (
    <div className="HeroContainer pt-2 pb-5">
      <div className="container-fluid">
        <div className="">
          <div className="col-10">
            <h1>Support Portal</h1>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary btn-lg">
              My Ticket
            </button>
          </div>
        </div>
        <div className="ps-5">
          <input
            className="form-control form-control-lg text-muted fs-6 pt-3 pb-3 mt-4"
            type="text"
            placeholder="Eg. How do i open my account , How do i activate F&Q..."
            aria-label=".form-control-lg example"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Hero;
