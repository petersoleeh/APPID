import React from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapGbifData = ({ MapData, loading }) => {
  if (!loading) {
    return (
      <React.Fragment>
        <Box>
          <Map>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"100%"}
              height={"600px"}
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
          zoom={7}
          style={{ width: "100%", height: "600px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

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
        </Map>
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
