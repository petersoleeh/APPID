import React from "react";

import "./App.css";

import Home from "./components/pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import ErrorFourOFour from "./components/pages/ErrorFourOFour";

import FullMap from "./components/FullMap";

import ObservationDetail from "./components/ObservationDetail";
import ObservationList from "./components/ObservationList";
import SearchResults from "./components/SearchResults";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/observations" exact component={ObservationList} />
            <Route path="/about" exact component={About} />
            <Route
              path="/observations/:id"
              exact
              component={ObservationDetail}
            />
            <Route path="/maps" exact component={FullMap} />
            <Route
              path="/results"
              exact
              component={SearchResults}
            />

            <Route path="*" component={ErrorFourOFour} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
