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
    window.scrollTo(0, 0);
    await gbif2
      .get("/data/1")
      .then((res) => {
        this.setState({
          gbifData: res.data,
          loading: true,
        });
      })
      .catch((error) => {
        console.log("Error getting data from Backend :", error);
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
            {gbifData.map((data) => (
              <article key={data._uuid} className="photo-card">
                <figure className="photo">
                  <Link to={`/observations/${data._id}`}>
                    {console.log(data)}
                    <img
                      className="img-list"
                      src={data._attachments.slice(0, 1).map((img) => {
                        return data._attachments.length === 0
                          ? "https://source.unsplash.com/I3Ah90pVRBo"
                          : img.download_url;
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
                  fontStyle="italic"
                  fontWeight="400"
                >
                  {typeof data.repeat_group !== "undefined" ?
                  data.repeat_group[0]["repeat_group/capture_insect_details/insect_scientific_name"].replace(/_/g, " ") : null 
                  // console.log(data.repeat_group[0]["repeat_group/capture_insect_details/insect_scientific_name"].replace("_", " ")) : null
                  } 
                  {/* {console.log(data.repeat_group[0]["repeat_group/capture_insect_details/insect_scientific_name"].replace("_", " "))} */}
                  
                </Typography>
                <Moment className="date" format="D MMMM YYYY">{(data._validation_status.timestamp*1000)}</Moment>
                <Typography
                  color="textSecondary"
                  className="description"
                  variant="body2"  
                  component="p"
                >
                  {typeof data.repeat_group !== "undefined" ? data._validation_status.label : null 
                  // console.log(data.repeat_group[0]["repeat_group/capture_insect_details/insect_scientific_name"].replace("_", " ")) : null
                  } 
                  {/* <i className="fas fa-map-marker-alt"></i>{" "} */}
                  {/* {data.verbatimLocality} */}
                </Typography>
                <Typography
                  color="textSecondary"
                  className="interact"
                  variant="body2"  
                  component="p"
                >
                  {typeof data.repeat_group !== "undefined" ? data._validation_status.color : null 
                  // console.log(data.repeat_group[0]["repeat_group/capture_insect_details/insect_scientific_name"].replace("_", " ")) : null
                  } 
                  {/* <i className="fas fa-map-marker-alt"></i>{" "} */}
                  {/* {data.verbatimLocality} */}
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
