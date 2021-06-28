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
        ` https://be.africanplantpollinatorinteractions.org/api/v1/data/1`,
        {auth: {
          username: 'icipe',
          password: 'icipe'
        }}
      )
      .then((res) => {
        setMapData(res.data);
        setisLoading(false);
        console.log(res)
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

          {MapData.map((data) => (
            <Marker
              key={data._uuid}
              position={[data._geolocation[0], data._geolocation[1]]}
            >
              <Popup>
                <Link to={`/observations/${data._id}`}>
                  <img
                    src={data._attachments.slice(0, 1).map((img) => img.download_url)}
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
