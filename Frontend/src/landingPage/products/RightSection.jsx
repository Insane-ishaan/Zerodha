import "./rightSectionProducts.css";

function RightSection({
  rightHeading,
  rightDescription,
  rightLearnMore,
  rightImg,
  rightLearnMorehref,
}) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <h3>{rightHeading}</h3>
          <p>{rightDescription}</p>
          <a href={rightLearnMorehref} style={{ color: "#1795beff" }}>
            {rightLearnMore} <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6 rightSection p-4">
          <img src={rightImg} alt="Products-Images" style={{ width: "95%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
