import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";


import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: "/images/bee_drop.png",
    iconSize: [25,41],
    iconAnchor: [12,41],
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapGbifData = ({ MapData, loading }) => {
  if (!loading) {
    return (
      <React.Fragment>
        <Box>
          <MapContainer>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"100%"}
              height={"600px"}
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
          zoom={7}
          style={{ width: "100%", height: "600px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <MarkerClusterGroup>
          {MapData.data.map((data) => (
            <Marker
              key={data._id}
              position={[data._geolocation[0], data._geolocation[1]]}
            >
              {/* <Popup>
                <Link to={`/observations/${data.key}`}>
                  <img
                    src={data.media.map((img) => img.identifier)}
                    width="150"
                    height="150"
                    alt={data.genericName}
                  />
                </Link>
              </Popup> */}
            </Marker>
          ))}
          </MarkerClusterGroup>
        </MapContainer>
      </React.Fragment>
    );
  }
};

export default MapGbifData;

// import React from "react";

// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// import Skeleton from "@material-ui/lab/Skeleton";
// import Box from "@material-ui/core/Box";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

// const MapGbifData = ({ MapData, loading }) => {
//   if (!loading) {
//     return (
//       <React.Fragment>
//         <Box>
//           <Map>
//             <Skeleton
//               animation="wave"
//               variant="rect"
//               width={"100%"}
//               height={"600px"}
//             />
//           </Map>
//         </Box>
//       </React.Fragment>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         <Map
//           center={[0.024, 37.9]}
//           zoom={7}
//           style={{ width: "100%", height: "600px" }}
//         >
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {MapData.results.map((data) => (
//             <Marker
//               key={data.key}
//               position={[data.decimalLatitude, data.decimalLongitude]}
//             >
//               {/* <Popup>
//                 <Link to={`/observations/${data.key}`}>
//                   <img
//                     src={data.media.map((img) => img.identifier)}
//                     width="150"
//                     height="150"
//                     alt={data.genericName}
//                   />
//                 </Link>
//               </Popup> */}
//             </Marker>
//           ))}
//         </Map>
//       </React.Fragment>
//     );
//   }
// };

// export default MapGbifData;
