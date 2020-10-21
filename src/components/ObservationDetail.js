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

import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function ObservationDetail({ match }) {
  const [isLoading, setisLoading] = useState(true);

  const [item, setItem] = useState();

  useEffect(() => {
    axios
      .get(`https://api.gbif.org/v1/occurrence/${match.params.id}`)
      .then((res) => {
        setItem(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("Error getting data from GBIF: " + err);
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
            <Grid item key={item.id} xs={12} sm={6} md={7}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={item.genericName}
                    height="500"
                    image={item.media.map((img) => {
                      return img.length === 0
                        ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
                        : img.identifier;
                    })}
                    title={item.genericName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.acceptedScientificName}
                    </Typography>
                    <Typography color="textSecondary">
                      Observer: {item.identifiedBy}
                    </Typography>
                    <Typography color="textSecondary">
                      Location: {item.verbatimLocality}
                    </Typography>
                    <Typography color="textSecondary">
                      Date: <Moment>{item.eventDate}</Moment>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item key={item.key} xs={12} sm={6} md={5}>
              <Map
                center={[item.decimalLatitude, item.decimalLongitude]}
                zoom={13}
                style={{ width: "100%", height: "500px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  key={item.key}
                  position={[item.decimalLatitude, item.decimalLongitude]}
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
              </Map>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default ObservationDetail;
