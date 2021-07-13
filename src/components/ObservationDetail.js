import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

import {
  Grid,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function ObservationDetail({ match }) {
  window.scrollTo(0, 0);

  const [isLoading, setisLoading] = useState(true);

  const [item, setItem] = useState();

  useEffect(() => {
    axios
      .get(
        `https://be.africanplantpollinatorinteractions.org/api/v1/data/1/${match.params.id}`
      )
      .then((res) => {
        setItem(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("Error getting data from MEDIA LIBRARY: " + err);
      });
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <Container>
          <Grid container spacing={3} style={{ marginTop: "30px" }}>
            <Grid item xs={12} sm={6} md={7}>
              <span>
                <Box pt={0.5}>
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={"100%"}
                    height={500}
                  />
                  <Skeleton width="80%" />
                  <Skeleton width="60%" />
                  <Skeleton width="40%" />
                </Box>
              </span>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box pt={0.5}>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width={"100%"}
                  height={"500px"}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {console.log(item)}
        <Container>
          <Grid
            container
            spacing={3}
            style={{ marginTop: "30px", marginBottom: "150px" }}
          >
            <Grid item key={item._id} xs={12} sm={8} md={7}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={item.genericName}
                    height="500"
                    image={item._attachments.slice(0, 1).map((img) => {
                      return img.length === 0
                        ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
                        : img.download_url;
                    })}
                    title={item.genericName}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      color="textSecondary"
                    >
                      <span style={{ fontStyle: "italic" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/capture_insect_details/insect_scientific_name"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography color="textSecondary">
                      Observer: {item.identifiedBy}
                    </Typography>
                    <Typography color="textSecondary">
                      Location: {item.verbatimLocality}
                    </Typography>
                    <Typography color="textSecondary">
                      Date:{" "}
                      <Moment format="D MMMM YYYY">
                        {item._validation_status.timestamp * 1000}
                      </Moment>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card style={{ marginTop: "20px" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.acceptedScientificName}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Sex:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/capture_insect_details/sex"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Life stage:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/capture_insect_details/life_stage"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Behaviour:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/interactions_details/visitor_behaviour"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Threatened species:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/capture_insect_details/threatened_species"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item key={item.key} xs={12} sm={4} md={5}>
              <MapContainer
                center={[item._geolocation[0], item._geolocation[1]]}
                zoom={13}
                style={{ width: "100%", height: "500px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                <Marker
                  key={item._id}
                  position={[item._geolocation[0], item._geolocation[1]]}
                >
                  {/* <Popup>
                    <img
                      //   src={data.media[0].identifier}
                      width="150"
                      height="150"
                      alt={item.genericName}
                    />
                  </Popup> */}
                </Marker>
              </MapContainer>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={({ marginBottom: "10px" }, { marginTop: "20px" })}
              >
                Flower/Plant interactions
              </Typography>
              <Card style={{ marginTop: "20px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={item.genericName}
                    height="200"
                    image={item._attachments.slice(1, 2).map((img) => {
                      return img.length === 0
                        ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
                        : img.download_url;
                    })}
                    title={item.genericName}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontStyle: "italic" }}
                    >
                      {typeof item.repeat_group !== "undefined"
                        ? item.repeat_group[0][
                            "repeat_group/capture_plant_detail/plant_scientific_name"
                          ].replace(/_/g, " ")
                        : "unknown"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Scent:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined" &&
                        typeof item.repeat_group[0][
                          "repeat_group/capture_plant_detail/floral_scent"
                        ] !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/capture_plant_detail/floral_scent"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Floral color:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined" &&
                        typeof item.repeat_group[0][
                          "repeat_group/capture_plant_detail/flower_color"
                        ] !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/capture_plant_detail/flower_color"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Resource collected:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined" &&
                        typeof item.repeat_group[0][
                          "repeat_group/interactions_details/resource_collected_of_used"
                        ] !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/interactions_details/resource_collected_of_used"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ marginBottom: "10px" }}
                    >
                      Interaction description:{" "}
                      <span style={{ fontStyle: "normal" }}>
                        {" "}
                        {typeof item.repeat_group !== "undefined" &&
                        typeof item.repeat_group[0][
                          "repeat_group/interactions_details/interactions_description"
                        ] !== "undefined"
                          ? item.repeat_group[0][
                              "repeat_group/interactions_details/interactions_description"
                            ].replace(/_/g, " ")
                          : "unknown"}
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default ObservationDetail;
