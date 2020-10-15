import React from "react";

import gbif from "./../../api/gbif";
import gbif2 from "./../../api/gbif2";
import Partners from './../Partners'

import GbifResults from "./../../components/GbifResults";

import MapGbifData from "./../../components/MapData";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import "../../App.css";
import SearchResults from "../SearchResults";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      bees: [],
      selectedBees: null,
      gbifData: [],
      loading: false,
      MapData: [],
    };
  }

  async componentDidMount() {
    await gbif2
      .get("search", {
        // params: {
        //   limit: 20,
        // },
      })
      .then((res) => {
        this.setState({
          gbifData: res.data,
          MapData: res.data,
          loading: true,
        });
      })
      .catch((error) => {
        console.log("Error getting data from GBIF :", error);
      });
  }

  render() {
    const { selectedBees, bees } = this.state;
    const { gbifData, loading } = this.state;
    const { MapData } = this.state;

    return (
      <React.Fragment>
        <Container style={{ marginTop: "30px" }}>
          <Paper style={{ backgroundColor: "#cfe8fc", height: "60vh" }}>
            Portal description: Coming Soon
          </Paper>
          <Grid container item xs={12} style={{ marginTop: "50px" }}>
            <Grid item xs={6}>
              <Typography variant="h4">Recent Observations</Typography>
            </Grid>
            <Grid item xs={6}>
              <Link to={`/observations`} className="view-link">
                <Typography variant="h5" className="view-all">
                  View all observations
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <GbifResults gbifData={gbifData} loading={loading} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <Typography variant="h4">Map </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <MapGbifData MapData={MapData} loading={loading} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <Typography variant="h4">Partners </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <Partners Partners={Partners} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <Typography variant="h4">Footer </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            {/* <Footer Footer={Footer} /> */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
