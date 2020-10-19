import React from "react";

import gbif from "./../../api/gbif";
import gbif2 from "./../../api/gbif2";
import Partners from "./../Partners";

import GbifResults from "./../../components/GbifResults";
import Footer from "./Footer";

import MapGbifData from "./../../components/MapData";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import SimpleSlider from "./../SimpleSlider";

import {
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

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
          <Grid container style={{ height: "60vh" }}>
            <Grid item xs={12} sm={8} md={7}>
              <SimpleSlider />
            </Grid>
            <Grid item xs={12} sm={4} md={5} style={{paddingTop: '50px', alignContent:'center'}} >
            <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align='center'>
                      Site Description
                    </Typography>
                    <Typography color="textSecondary" align='center'>
                    {/* A unique repository of information on bees' interactions. 
                    The Portal aims to aggregate data through public participation
                     and provide open and free access to biodiversity information. 
                     We welcome your participation and feedback. */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container item xs={12} style={{ marginTop: "150px" }}>
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
          <Grid
            item
            xs={12}
            style={{ marginTop: "80px", marginBottom: "150px" }}
          >
            <Partners Partners={Partners} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            {/* <Typography variant="h4">Footer </Typography> */}
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            {/* <Footer /> */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
