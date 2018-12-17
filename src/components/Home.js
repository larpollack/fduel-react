import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const shotsStyle = {
      fontWeight: "900"
    };
    return (
      <section className="central">
        <div className="top-container">
          <div className="row">
            <div className="column-main">
              <div className="card">
                <div className="warriors">GOLDEN STATE</div>
                <br />
                <div className="warriors-bold">WARRIORS</div>
                <div className="warriors-score">96</div>
                <div className="arena">
                  <h4>7:34 4th</h4>
                  <br />
                  Oracle Arena
                  <br />
                  Oakland, CA
                </div>
                <div className="thunder-score">81</div>
                <div className="thunder">OKLAHOMA CITY</div>
                <br />
                <div className="thunder-bold">THUNDER</div>
                <br />
                <div className="snack">
                  LAST PLAY: TV TIMEOUT. GO GET A SNACK.
                </div>
                <br />

                <h3>SHOW:</h3>
                <h3 style={shotsStyle}>RECENT SHOTS</h3>

                <br />
                <div className="court-container">
                  <div className="warriors">
                    <ul>
                      <li>FG%</li>
                      <li>
                        <h3>55.7%</h3>
                      </li>
                      <li>FT%</li>
                      <li>
                        <h3>60.0%</h3>
                      </li>
                      <li>3P%</li>
                      <li>
                        <h3>55.5%</h3>
                      </li>
                    </ul>
                  </div>
                  <img alt="court" src="images/court.png" />
                  <div className="thunder">
                    <ul>
                      <li>FG%</li>
                      <li>
                        <h3>47.1%</h3>
                      </li>
                      <li>FT%</li>
                      <li>
                        <h3>80.0%</h3>
                      </li>
                      <li>3P%</li>
                      <li>
                        <h3>36.4%</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column-scoring">
              <div className="card-right">
                <div className="scoring-head">YOUR SCORING</div>
                <br />
                <div className="scoring-games">
                  <h4>THIS GAME</h4>
                  ALL GAMES
                </div>
                <br />
                <div className="excess">done</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="row">
            <div className="column-plays">
              <div className="play-card">
                <div className="play-head">PLAY BY PLAY</div>
                <table>
                  <tr>
                    <td>
                      <img alt="curry" src="images/sCurry.png" />
                    </td>
                    <td className="text">
                      <p>7:34 4th</p>
                      <h5>Stephen Curry</h5>
                      makes 13-foot jumper. Assisted by
                      <h5>Draymond Green.</h5>
                    </td>
                    <td>
                      <h5>96-81, GS</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="durant" src="images/kDurant.png" />
                    </td>
                    <td className="text">
                      <p>7:46 4th</p>
                      <h5>Kevin Durant</h5>
                      misses 2-foot layup. Rebounded by
                      <h5>Andrew Bogut.</h5>
                    </td>
                    <td>
                      <h5>94-81, GS</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="klay" src="images/kThompson.png" />
                    </td>
                    <td className="text">
                      <p>7:55 4th</p>
                      <h5>Klay Thompson</h5>
                      misses 24-foot jumper. Rebounded by
                      <h5>Serge Ibaka.</h5>
                    </td>
                    <td>
                      <h5>94-81, GS</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="durant" src="images/kDurant.png" />
                    </td>
                    <td className="text">
                      <p>8:17 4th</p>
                      <h5>Kevin Durant</h5>
                      turnover.
                    </td>
                    <td>
                      <h5>94-81, GS</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="curry" src="images/sCurry.png" />
                    </td>
                    <td className="text">
                      <p>8:27 4th</p>
                      <h5>Stephen Curry</h5>
                      makes free throw.
                    </td>
                    <td>
                      <h5>94-81, GS</h5>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column-stats">
              <div className="card-stats">
                <div className="stats-head">STATS</div>
                <br />

                <div className="excess">done</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
