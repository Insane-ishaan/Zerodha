import Home from "./Home";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import LeftBar from "./LeftTopBar";

function NavBar() {
  const [clicked, setClicked] = useState(11);
  const [dropdown, setDropDown] = useState(false);

  const handleNavClicks = (index) => {
    return setClicked(index);
  };

  const handleDropDown = (index) => {
    return setDropDown(!dropdown);
  };

  const menu = "click";
  const selectMenu = "click selected";
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <LeftBar />
          <Link
            className="navbar-brand NavBar-Icon"
            to="/"
            onClick={() => handleNavClicks(11)}
          >
            <img src="/ZerodhaKite.webp" alt="Kite-Image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/summary"
                  onClick={() => handleNavClicks(0)}
                >
                  <p className={clicked === 0 ? selectMenu : menu}>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/orders"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleNavClicks(1)}
                >
                  <p className={clicked === 1 ? selectMenu : menu}>Orders</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/holdings"
                  onClick={() => handleNavClicks(2)}
                >
                  <p className={clicked === 2 ? selectMenu : menu}>Holdings</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/positions"
                  onClick={() => handleNavClicks(3)}
                >
                  <p className={clicked === 3 ? selectMenu : menu}>Positions</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/funds"
                  onClick={() => handleNavClicks(4)}
                >
                  <p className={clicked === 4 ? selectMenu : menu}>Funds</p>
                </Link>
              </li>
              <li className="nav-item me-4 border-black border-end">
                <Link
                  className="nav-link"
                  to="/apps"
                  onClick={() => handleNavClicks(5)}
                >
                  <p className={clicked === 5 ? selectMenu : menu}>Apps</p>
                </Link>
              </li>
              <li className="nav-item d-flex">
                <img
                  src="/UserId.webp"
                  alt="UserId"
                  style={{ height: "2.5rem", marginRight: "0.1rem" }}
                  className="rounded-circle"
                />
                <a className="nav-link">UsersID</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
