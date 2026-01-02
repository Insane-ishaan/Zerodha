import Home from "./Home";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import LeftBar from "./LeftTopBar";
import axios from "axios";
import { useEffect } from "react";
import FlashToast from "./FlashToast.jsx";
import "./TopBar.css";

function NavBar() {
  const [clicked, setClicked] = useState(11);
  const [dropdown, setDropDown] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/authuser", { withCredentials: true })
      .then((res) => {
        setUserInfo(res.data.findUser);
      });
  }, []);
  const handleNavClicks = (index) => {
    return setClicked(index);
  };

  const handleLogOut = () => {
    axios.get("http://localhost:3000/signout", {
      withCredentials: true,
    });
    window.location.replace(import.meta.env.VITE_FRONTEND_URL);
  };

  const menu = "click";
  const selectMenu = "click selected";
  return (
    <div className="navBar-layout">
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
                  style={{ height: "3rem", marginRight: "0.5rem" }}
                  className="rounded-circle"
                />
                <div>
                  <a className="nav-link p-0">
                    {userInfo.name
                      ? userInfo.name.charAt(0).toUpperCase() +
                        userInfo.name.slice(1)
                      : ""}
                  </a>
                  <a className="nav-link p-0 SignOutOpt" onClick={handleLogOut}>
                    Sign out?
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
