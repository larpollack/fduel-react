import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    console.log("footer", this.props.db.footer_scoreboard);
    const db = this.props.db.footer_scoreboard || [];
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
            <li className="active">NBA</li>
            <li>MLB</li>
            <li>NCAAF</li>
          </ul>
        </div>
        <div className="footer-container">
          <i className="fas fa-angle-left" style={leftFloat} />
          <div className="footer">
            <ul>
              <li>
                {db[0].away_team.name.toUpperCase()}
                <h5>{` ${db[0].away_team.score}`}</h5>
                <br />
                {db[0].home_team.name.toUpperCase()}
                <h5>{` ${db[0].home_team.score}`}</h5>
                <br />
                <h6>{`${db[0].time_left} ${db[0].quarter}th`} TV: ESPN</h6>
              </li>
            </ul>
            <ul>
              <li>
                <h5>{db[0].away_team.abbrev}</h5>
              </li>
            </ul>
            <ul>
              <li>
                <h5>{`${db[0].top_performers[1].name}, ${
                  db[0].top_performers[1].position
                }`}</h5>
                <br />
                <h6>{`${db[0].top_performers[1].points} points, 6 assists`}</h6>
              </li>
            </ul>
            <ul>
              <li>
                <h5>{db[0].home_team.abbrev}</h5>
              </li>
            </ul>
            <ul>
              <li>
                <h5>{`${db[0].top_performers[0].name}, ${
                  db[0].top_performers[0].position
                }`}</h5>
                <br />
                <h6>{`${db[0].top_performers[0].points} points, ${
                  db[0].top_performers[0].rebounds
                } rebounds`}</h6>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <ul>
              <li>
                {db[1].away_team.abbrev}
                <h5>{` ${db[1].away_team.score}`}</h5>
                <br />
                {db[1].home_team.abbrev}
                <h5>{` ${db[1].home_team.score}`}</h5>
                <br />
                <h6>{`${db[1].time_left} ${db[1].quarter}nd`}</h6>
              </li>
            </ul>
            <ul>
              <li>
                {db[2].away_team.abbrev}
                <h5>{` ${db[2].away_team.score}`}</h5>
                <br />
                {db[2].home_team.abbrev}
                <h5>{` ${db[1].home_team.score}`}</h5>
                <br />
                <h6>{`${db[2].time_left} ${db[2].quarter}rd`}</h6>
              </li>
            </ul>
          </div>
          <i className="fas fa-angle-right" style={rightFloat} />
        </div>
      </footer>
    );
  }
}
