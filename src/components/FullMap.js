import React, { useState, useEffect } from "react";

import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";


// import icon from '/images/bee_drop.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: "/images/bee_drop.png",
    iconSize: [25,41],
    iconAnchor: [12,41],
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function FullMap() {
  const [isLoading, setisLoading] = useState(true);

  const [MapData, setMapData] = useState();

  useEffect(() => {
    axios
      .get(` https://be.africanplantpollinatorinteractions.org/api/v1/data/1`, {
        auth: {
          username: "icipe",
          password: "icipe",
        },
      })
      .then((res) => {
        setMapData(res.data);
        setisLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log("Error getting data from GBIF: " + err);
      });
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <Box>
          <MapContainer>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"100%"}
              height={"680px"}
            />
          </MapContainer>
        </Box>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <MapContainer
          center={[0.024, 37.9]}
          zoom={6}
          maxZoom={18}
          style={{ width: "100%", height: "680px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <MarkerClusterGroup>
            {MapData.map((data) => (
              <Marker
                key={data._id}
                position={[data._geolocation[0], data._geolocation[1]]}
              >
                <Popup>
                  <Link to={`/observations/${data._id}`}>
                    <img
                      src={data._attachments
                        .slice(0, 1)
                        .map((img) => img.download_url)}
                      width="150"
                      height="150"
                      alt={data.genericName}
                    />
                  </Link>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </React.Fragment>
    );
  }
}

export default FullMap;
