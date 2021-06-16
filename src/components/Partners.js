import React from "react";
import {
  CardActionArea,
  CardMedia,
  Card,
  Container,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Link to={{ pathname: "http://www.icipe.org/" }} target="_blank">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="upande"
                    height="100px"
                    width="100%"
                    image="./images/icipe.jpg"
                    title=""
                    style = {{objectFit: 'contain'}}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link
              to={{ pathname: "https://www.museums.or.ke/" }}
              target="_blank"
            >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="nmk"
                    height="100px"
                    width="100%"
                    image="./images/nmk.jpg"
                    title=""
                    style = {{objectFit: 'contain'}}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to={{ pathname: "http://www.gbif.org/" }} target="_blank">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="icipe"
                    height="100px"
                    width="100%"
                    image="./images/GBIF.png"
                    title=""
                    style = {{objectFit: 'contain'}}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to={{ pathname: "https://www.upande.com/" }} target="_blank">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="gbif"
                    height="100px"
                    width="100%"
                    image="./images/upande.png"
                    title=""
                    style = {{objectFit: 'contain'}}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Partners;
