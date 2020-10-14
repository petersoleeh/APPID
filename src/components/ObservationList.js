import React from "react";
import { Link } from "react-router-dom";

import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import gbif2 from "../api/gbif2";
import "./ObservationList.css";

import { Typography, Container, Grid } from "@material-ui/core";
import Moment from "react-moment";

class ObservationList extends React.Component {
  constructor() {
    super();

    this.state = {
      gbifData: [],
      loading: false,
    };
  }

  async componentDidMount() {
    await gbif2
      .get("search")
      .then((res) => {
        this.setState({
          gbifData: res.data,
          loading: true,
        });
      })
      .catch((error) => {
        console.log("Error getting data from GBIF :", error);
      });
  }

  render() {
    const { gbifData, loading } = this.state;
    if (!loading) {
      return (
        <React.Fragment>
          <Container style={{ marginTop: "30px" }}>
            <Box>
              <article className="photo-card">
                <figure className="photo">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={"100%"}
                    height={"250px"}
                  />
                </figure>
                <Typography
                  className="author"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  <Skeleton width="80%" />
                </Typography>
                <Skeleton width="60%" />
                <Typography
                  color="textSecondary"
                  className="description"
                  variant="body2"
                  component="p"
                >
                  <Skeleton width="40%" />
                  <Skeleton width="40%" />
                </Typography>
              </article>
            </Box>
            <Box>
              <article className="photo-card">
                <figure className="photo">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={"100%"}
                    height={"250px"}
                  />
                </figure>
                <Typography
                  className="author"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  <Skeleton width="80%" />
                </Typography>
                <Skeleton width="60%" />
                <Typography
                  color="textSecondary"
                  className="description"
                  variant="body2"
                  component="p"
                >
                  <Skeleton width="40%" />
                  <Skeleton width="40%" />
                </Typography>
              </article>
            </Box>
            <Box>
              <article className="photo-card">
                <figure className="photo">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={"100%"}
                    height={"250px"}
                  />
                </figure>
                <Typography
                  className="author"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  <Skeleton width="80%" />
                </Typography>
                <Skeleton width="60%" />
                <Typography
                  color="textSecondary"
                  className="description"
                  variant="body2"
                  component="p"
                >
                  <Skeleton width="40%" />
                  <Skeleton width="40%" />
                </Typography>
              </article>
            </Box>
          </Container>
        </React.Fragment>
      );
    } else {
      console.log(gbifData);
      return (
        <React.Fragment>
          <Container style={{ marginTop: "30px" }}>
            {gbifData.results.map((data) => (
              <article key={data.key} className="photo-card">
                <figure className="photo">
                  <Link to={`/observations/${data.key}`}>
                    <img
                      className="img-list"
                      src={data.media.map((img) => {
                        return img.length === 0
                          ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
                          : img.identifier;
                      })}
                      alt=""
                      height={"150px"}
                    />
                  </Link>
                </figure>
                <Typography
                  className="author"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {data.acceptedScientificName}
                </Typography>
                <Moment className="date">{data.eventDate}</Moment>
                <Typography
                  color="textSecondary"
                  className="description"
                  variant="body2"
                  component="p"
                >
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {data.verbatimLocality}
                </Typography>
              </article>
            ))}
          </Container>
        </React.Fragment>
      );
    }
  }
}

export default ObservationList;
