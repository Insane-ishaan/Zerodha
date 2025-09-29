function TicketTemplate({ HeadingName, SubLists, icons }) {
  /*     <div className="p-1">
      <span className="iconSpan rounded-start p-3">
        <i className={icons}></i>
      </span>
      <p className="d-inline-flex gap-1 border border-start-0 rounded-end iconDropDown ">
        <button
          className="btn btn-lg bg-light bg-opacity-10 DropDownBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {DropDownName}
        </button>
      </p>
      <div className="collapse" id={collapseId}>
        <div className="card card-body iconDropDownContent col-4">
          <ul>
            {DropDownItems.map((DropDownItem, index) => (
              <li key={index}>
                <a href="#">{DropDownItem}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div> */

  return (
    <div className="p-5">
      <h3 className="fs-5">
        <i className={icons} style={{ width: "1.5rem" }}></i>
        {HeadingName}
      </h3>
      <ul className="mt-5">
        {SubLists.map((value, idx) => (
          <li key={idx} className="p-2">
            <a href="#">{value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketTemplate;
