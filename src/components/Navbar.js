import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const nav = this.props.nav;
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
        <div className="navbar-toggle">
          <i className="fas fa-bars" />
        </div>
        <nav className="navbar-links">
          {nav.map(nav => (
            <div className="nav-item" key={nav.title}>
              {nav.title}
            </div>
          ))}
        </nav>
        {/* nav items not included in API db */}
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
