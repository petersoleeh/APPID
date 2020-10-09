import React from "react";


import gbif from "./../../api/gbif";
import gbif2 from "./../../api/gbif2";

import GbifResults from "./../../components/GbifResults";

import MapGbifData from "./../../components/MapData";
import { Container, Grid, Paper, Typography } from "@material-ui/core";


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
        params: {
          limit: 6,
        },
      })
      .then((res) => {
        this.setState({
          gbifData: res.data,
          MapData: res.data,
          loading: true,
        });
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
            here
          </Paper>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <Typography variant="h4">Recent Observations</Typography>
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
            {/* <Partners MapData={MapData} loading={loading}/> */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
