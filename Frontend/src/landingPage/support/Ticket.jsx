import TicketTemplate from "./TicketTemplate";
function Ticket() {
  const ticketData = [
    {
      HeadingName: "Account Opening",
      SubLists: [
        "Opening Account Opening",
        "Minor",
        "NRI",
        "fa-regular fa-square-plus",
      ],
      icons: "fa-regular fa-square-plus",
    },
    {
      HeadingName: "Your Zerodha Account",
      SubLists: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participation (DP)",
        "Nomination",
        "Transfer and Conversion",
        "Transfer and Conversion of securities",
      ],
      icons: "fa-solid fa-user",
    },
    {
      HeadingName: "Support",
      SubLists: ["Contact us", "Live chat", "Email"],
      icons: "fa-solid fa-kit-medical",
    },
    {
      HeadingName: "Your Zerodha Account",
      SubLists: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participation (DP)",
        "Nomination",
        "Transfer and Conversion",
        "Transfer and Conversion of securities",
      ],
      icons: "fa-solid fa-user",
    },
    {
      HeadingName: "Your Zerodha Account",
      SubLists: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participation (DP)",
        "Nomination",
        "Transfer and Conversion",
        "Transfer and Conversion of securities",
      ],
      icons: "fa-solid fa-user",
    },
    {
      HeadingName: "Your Zerodha Account",
      SubLists: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participation (DP)",
        "Nomination",
        "Transfer and Conversion",
        "Transfer and Conversion of securities",
      ],
      icons: "fa-solid fa-user",
    },
    {
      HeadingName: "Your Zerodha Account",
      SubLists: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participation (DP)",
        "Nomination",
        "Transfer and Conversion",
        "Transfer and Conversion of securities",
      ],
      icons: "fa-solid fa-user",
    },
  ];
  return (
    <div className="container">
      <h4 className="fw-normal ps-5">
        To create a Ticket, select a relevant topic
      </h4>
      <div className="row mt-3">
        {ticketData.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <TicketTemplate
              key={index}
              HeadingName={item.HeadingName}
              SubLists={item.SubLists}
              icons={item.icons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticket;
