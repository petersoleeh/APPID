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
      .get(`https://be.africanplantpollinatorinteractions.org/api/v1/data/3`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log("Error getting data from MEDIA API: " + err);
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

          {item.slice(0, 5).map((item) => (
            <div key={item._id}>
              <Link to={`/observations/${item._id}`}>
                <img
                  src={item._attachments.slice(0, 1).map((img) => {
                    return img.length === 0
                      ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
                      : img.download_url;
                  })}
                  style={{
                    height: "500px",
                    width: "100%",
                    borderRadius: "15px",
                  }}
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
