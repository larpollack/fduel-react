import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      db: {},
      plays: [],
      nav: []
    };
  }

  componentDidMount() {
    this.getDb();

    this.getNav();
    this.getPlays();
  }

  getDb() {
    axios
      .get(
        "https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db"
      )
      .then(res => res.data)
      .then(db => {
        this.setState({ db, isLoading: false });
      });
  }

  getPlays() {
    axios
      .get(
        "https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db"
      )
      .then(res =>
        res.data.plays.map(play => ({
          id: `${play.id}`,
          away_score: `${play.away_score}`,
          home_score: `${play.home_score}`,
          description: `${play.description}`,
          quarter: `${play.quarter}`,
          time_left: `${play.time_left}`,
          scoring_player: `${play.scoring_player}`
        }))
      )
      .then(plays => {
        this.setState({ plays, isLoading: false });
      });
  }
  getNav() {
    axios
      .get(
        "https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db"
      )
      .then(res =>
        res.data.nav_elements.map(nav => ({
          title: `${nav.title}`,
          href: `${nav.href}`
        }))
      )
      .then(nav => {
        this.setState({ nav, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading..</p>;
    }
    return (
      <div>
        <Navbar nav={this.state.nav} />
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Home plays={this.state.plays} db={this.state.db} />
              )}
            />
          </div>
        </Router>
        <Footer db={this.state.db} />
      </div>
    );
  }
}
