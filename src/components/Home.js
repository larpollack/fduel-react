import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log("plays", this.props.plays);
    console.log("db", this.props.db);
    const plays = this.props.plays || [];
    const db = this.props.db || {};
    const shotsStyle = {
      fontWeight: "900"
    };

    return (
      <section className="central">
        <div className="top-container">
          <div className="row">
            <div className="column-main">
              <div className="card">
                <div className="warriors">
                  {db.game_stats.away_team.location.toUpperCase()}
                </div>
                <br />
                <div className="warriors-bold">
                  {db.game_stats.away_team.name.toUpperCase()}
                </div>
                <div className="warriors-score">
                  {db.game_stats.away_team.score}
                </div>
                <div className="arena">
                  <h4>
                    {`${db.game_stats.time_left} ${db.game_stats.quarter}th`}
                  </h4>
                  <br />
                  {db.game_stats.arena}
                  <br />
                  {db.game_stats.location}
                </div>
                <div className="thunder-score">
                  {db.game_stats.home_team.score}
                </div>
                <div className="thunder">
                  {db.game_stats.home_team.location.toUpperCase()}
                </div>
                <br />
                <div className="thunder-bold">
                  {db.game_stats.home_team.name.toUpperCase()}
                </div>
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
                      {db.game_stats.away_team.shooting_stats.map(shot => (
                        <div key={shot.title}>
                          <li>{shot.title}</li>

                          <li>
                            <h3>{shot.perc}</h3>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <img alt="court" src="images/court.png" />
                  <div className="thunder">
                    <ul>
                      {db.game_stats.home_team.shooting_stats.map(shot => (
                        <div key={shot.title}>
                          <li>{shot.title}</li>

                          <li>
                            <h3>{shot.perc}</h3>
                          </li>
                        </div>
                      ))}
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
                  <tbody>
                    {plays.map(plays => (
                      <tr key={plays.id}>
                        <td>
                          {plays.scoring_player === "steph_curry" ? (
                            <img alt="curry" src="images/sCurry.png" />
                          ) : plays.scoring_player === "kevin_durant" ? (
                            <img alt="durant" src="images/kDurant.png" />
                          ) : (
                            <img alt="thompson" src="images/kThompson.png" />
                          )}
                        </td>
                        <td className="text">
                          <p>{`${plays.time_left} ${plays.quarter}th`}</p>
                          {plays.description}
                        </td>
                        <td>
                          <h5>{`${plays.away_score}-${
                            plays.home_score
                          }, GS`}</h5>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
