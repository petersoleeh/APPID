import React, { useState, useEffect } from "react";

import axios from "axios";
import Slider from "react-slick";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";



import { Link } from "react-router-dom";

function SimpleSlider() {
  const [isLoading, setLoading] = useState(true);

  const [item, setItem] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.gbif.org/v1/occurrence/search?taxonKey=7799978&country=KE`
      )
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log("Error getting data from GBIF: " + err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isLoading) {
    return (
      <React.Fragment>
        <Slider {...settings}>
          <Box>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"100%"}
              height={500}
            />
          </Box>
        </Slider>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Slider {...settings}>
          {console.log(item)}
          {item.results.slice(3, 7).map((item) => (
            
            <div key={item.key}>
            <Link to={`/observations/${item.key}`}>
              <img
                src={item.media.map((img) => {
                    return img.length === 0
                      ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
                      : img.identifier;
                  })}
                style={{ height: "500px", width: "100%", borderRadius: '15px' }}
                alt={item.genericName}
              />
              </Link>
            </div>
          ))}

        </Slider>
      </React.Fragment>
    );
  }
}

export default SimpleSlider;

// class SimpleSlider extends React.Component {

//     render () {

//     const [isLoading, setLoading] = useState(true);

//     const [item, setItem] = useState();

//     useEffect(() => {
//     axios
//         .get(`https://api.gbif.org/v1/occurrence/search?taxonKey=7799978&country=KE`)
//         .then((res) => {
//         setItem(res.data);
//         setLoading(false);
//         })
//         .catch((err) => {
//         console.log("Error getting data from GBIF: " + err);
//         });

//     }, []);

//         const settings = {
//             dots: true,
//             infinite: true,
//             fade: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//           };

//         return (
//           <React.Fragment>
//             <Slider {...settings}>
//               <div>
//                 <img />
//               </div>
//               <div>
//                 <h3>2</h3>
//               </div>
//               <div>
//                 <h3>3</h3>
//               </div>
//               <div>
//                 <h3>4</h3>
//               </div>
//               <div>
//                 <h3>5</h3>
//               </div>
//               <div>
//                 <h3>6</h3>
//               </div>
//             </Slider>
//           </React.Fragment>
//         );
//     }
// }
