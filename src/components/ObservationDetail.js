import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import ImageViewer from "react-simple-image-viewer";

import {
  Grid,
  Paper,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function ObservationDetail({ match }) {
  const [isLoading, setLoading] = useState(true);

  const [item, setItem] = useState();

  const [currentImage, setCurrentImage] = useState(0);
  const [isviewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    axios
      .get(`https://api.gbif.org/v1/occurrence/${match.params.id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      });
  }, []);

  const images = [
    "http://placeimg.com/1200/800/nature",
    "http://placeimg.com/800/1200/nature",
    "http://placeimg.com/1920/1080/nature",
    "http://placeimg.com/1500/500/nature",
  ];

  if (isLoading) {
    return <div>Loading..</div>;
  } else {
    return (
      <React.Fragment>
        {console.log(item)}

        <Container>
          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item key={item.id} xs={9}>
              <Paper>
                <Typography
                  variant="h3"
                  align="center"
                  style={{ fontStyle: "italic" }}
                >
                  {item.acceptedScientificName}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item key={item.id} xs={12} sm={6} md={7}>
              {/* {item.media.map((src,index) =>(
                     <img 
                        src={src}
                        onLoad = {() => openImageViewer(index)}
                        width='100px'
                        key={index}
                        style={{margin: '2px'}}
                        alt={item.genericName}                     
                     />
                 ))}
                 {isviewerOpen && (
                     <ImageViewer
                       src={item.media.map((img)=>{ console.log(img.identifier) })}
                       currentIndex={currentImage}
                       onClose= {closeImageViewer}
                     />
                 )}                 */}
            </Grid>
            <Grid item key={item.key} xs={12} sm={6} md={5}>
              <Map
                center={[item.decimalLatitude, item.decimalLongitude]}
                zoom={9}
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
