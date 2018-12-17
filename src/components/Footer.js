import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const rightFloat = {
      float: "right"
    };
    const leftFloat = {
      float: "left"
    };
    return (
      <footer className="foot">
        <div className="footer-top">
          <ul>
            <li>NBA</li>
            <li>MLB</li>
            <li>NCAAF</li>
          </ul>
        </div>
        <div className="footer-container">
          <i className="fas fa-angle-left" style={leftFloat} />
          <div className="footer">
            <ul>
              <li>
                WARRIORS
                <h5>96</h5>
                <br />
                THUNDER
                <h5>81</h5>
                <br />
                <h6>7:34 4th TV: ESPN</h6>
              </li>
            </ul>
            <ul>
              <li>
                <h5>GSW</h5>
              </li>
            </ul>
            <ul>
              <li>
                <h5>S. Curry, PG</h5>
                <br />
                <h6>23 points, 6 assists</h6>
              </li>
            </ul>
            <ul>
              <li>
                <h5>OKC</h5>
              </li>
            </ul>
            <ul>
              <li>
                <h5>K. Durant, SF</h5>
                <br />
                <h6>30 points, 9 rebounds</h6>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <ul>
              <li>
                CHI
                <h5>56</h5>
                <br />
                BOS
                <h5>54</h5>
                <br />
                <h6>6:33 3rd</h6>
              </li>
            </ul>
            <ul>
              <li>
                ATL
                <h5>26</h5>
                <br />
                MEM
                <h5>24</h5>
                <br />
                <h6>12:00 2nd</h6>
              </li>
            </ul>
          </div>
          <i className="fas fa-angle-right" style={rightFloat} />
        </div>
      </footer>
    );
  }
}
