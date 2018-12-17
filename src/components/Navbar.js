import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const classToggle = () => {
      let linksEl = document.querySelectorAll(".navbar-links");
      if (linksEl.style.display === "flex") {
        linksEl.style.display = "none";
      } else {
        linksEl.style.display = "flex";
      }
    };

    const userCircle = {
      fontSize: "18px",
      paddingRight: "10px",
      marginTop: "-20px"
    };
    const balance = {
      border: "none"
    };
    const bfunds = {
      border: "none",
      paddingRight: "0"
    };

    return (
      <div className="navbar">
        <div className="logo">
          <img alt="logo" src="images/logo.png" />
        </div>
        <div className="navbar-toggle" onClick={classToggle}>
          <i className="fas fa-bars" />
        </div>
        <nav className="navbar-links">
          <div className="nav-item">Lobby</div>
          <div className="nav-item">Upcoming</div>
          <div className="nav-item">
            Live
            <i className="fas fa-angle-down" />
          </div>
          <div className="nav-item">History</div>
        </nav>
        <nav className="navbar-links nav-item-right">
          <div className="nav-item">
            Help
            <i className="fas fa-angle-down" />
          </div>
          <div className="nav-item">
            <i className="fas fa-user-circle" style={userCircle} />
            nbonaddio
            <i className="fas fa-angle-down" />
          </div>
          <div className="nav-item" style={balance}>
            <h5>$1,000,000.00</h5>
            BALANCE
          </div>
          <div className="nav-item" style={bfunds} />
          <button className="btn-funds">Add funds</button>
        </nav>
      </div>
    );
  }
}
