function LeftSection({
  leftImg,
  leftHeading,
  leftDescription,
  leftDemo,
  leftDemohref,
  leftLearnMorehref,
  leftLearnMore,
  leftGoggleStore,
  leftAppStore,
}) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-6 leftSection p-4">
          <img src={leftImg} alt="Products-Images" style={{ width: "90%" }} />
        </div>
        <div className="col-6 p-5">
          <h3>{leftHeading}</h3>
          <p>{leftDescription}</p>
          <div>
            <a
              href={leftDemohref}
              style={{ color: "#1795beff", marginRight: "4.5rem" }}
            >
              {leftDemo}&nbsp;
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={leftLearnMorehref} style={{ color: "#1795beff" }}>
              {leftLearnMore}&nbsp;{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <br />
          <img src={leftGoggleStore} alt="Goggle-LookUp" className="me-3" />
          <img src={leftAppStore} alt="AppStore-LoopUp" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
