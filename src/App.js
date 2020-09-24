import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Grid } from "@material-ui/core";

import NavBar from "./components/NavBar";

import SearchBar from "./components/SearchBar";

import SearchResults from "./components/SearchResults";

import ObservationList from "./components/ObservationList";

import gbif from "./api/gbif";

class App extends React.Component {
  state = {
    bees: [],
    selectedBees: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await gbif.get("search", {
      params: {
        q: searchTerm,
      },
    });
    console.log(response.data);

    this.setState({
      bees: response.data.results,
      selectedBees: response.data.results[0],
    });
  };

  render() {
    const { selectedBees, bees } = this.state;

    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact />
          </Switch>
          <Grid container justify="center" spacing={10}>
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar onFormSubmit={this.handleSubmit} />
                </Grid>
                <Grid item xs={12}>
                  <SearchResults bees={selectedBees} />
                </Grid>
                <Grid item xs={6}>
                  <ObservationList bees={bees} />
                </Grid>
                <Grid item xs={6}>
                  {/* Display footer */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
