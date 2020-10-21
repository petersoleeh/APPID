import React, { useState, useEffect } from "react";

import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function FullMap() {
  const [isLoading, setisLoading] = useState(true);

  const [MapData, setMapData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.gbif.org/v1/occurrence/search?taxonKey=7799978&country=KE`
      )
      .then((res) => {
        setMapData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("Error getting data from GBIF: " + err);
      });
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <Box>
          <Map>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"100%"}
              height={"680px"}
            />
          </Map>
        </Box>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Map
          center={[0.024, 37.9]}
          zoom={6}
          style={{ width: "100%", height: "680px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {MapData.results.map((data) => (
            <Marker
              key={data.key}
              position={[data.decimalLatitude, data.decimalLongitude]}
            >
              <Popup>
                <Link to={`/observations/${data.key}`}>
                  <img
                    src={data.media.map((img) => img.identifier)}
                    width="150"
                    height="150"
                    alt={data.genericName}
                  />
                </Link>
              </Popup>
            </Marker>
          ))}
        </Map>
      </React.Fragment>
    );
  }
}

export default FullMap;
