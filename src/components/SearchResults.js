import React from "react";

import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

import { Redirect, Link } from "react-router-dom";

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Container,
  Grid,
  CardActions,
} from "@material-ui/core";

const SearchResults = ({ bees }) => {
  const cards = [1, 2, 3];

  if (!bees)
    return (
      <React.Fragment>
        {/* <Redirect to={{ pathname: "/results" }}> */}
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
        {/* </Redirect> */}
      </React.Fragment>
    );

  // console.log(bees.results[0].references);

  const imgSrc = bees.references;

  // const cards = [1, 2, 3]

  return (
    <React.Fragment>
      {console.log(bees)}
      {/* <Redirect to={{ pathname: "/results" }}> */}
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="bees"
                      height="140"
                      image={imgSrc}
                      title="bees"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {bees.acceptedScientificName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Recorded By: {bees.recordedBy}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                    Learn More
                  </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      {/* </Redirect> */}
    </React.Fragment>
  );
};

export default SearchResults;
