import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const API =
  "https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: {}
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ db: data.db }));
  }

  render() {
    return (
      <div>
        <Navbar nav={this.state.nav} />
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Home plays={this.state.plays} stats={this.state.stats} />
              )}
            />
          </div>
        </Router>
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}
