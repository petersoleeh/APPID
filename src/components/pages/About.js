import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default function About() {
  window.scrollTo(0, 0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {"A unique repository of information on bees interactions."}
          {
            "The Portal aims to aggregate data through public participation and provide open and free access to biodiversity information. "
          }
          {"We welcome your participation and feedback."}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The project is funded by{" "}
          <Link
            to={{ pathname: "https://jrsbiodiversity.org/" }}
            target="_blank"
            rel="noopener"
            color="primary"
            style={{ textDecoration: "none" }}
          >
            JRS Biodiversity Foundation
          </Link>{" "}
          and implemented by the International Centre of Insect Physiology and
          Ecology (
          <Link
            to={{ pathname: "http://www.icipe.org/" }}
            target="_blank"
            rel="noopener"
            color="primary"
            style={{ textDecoration: "none" }}
          >
            icipe
          </Link>
          ) with{" "}
          <Link
            to={{ pathname: "https://www.upande.com/" }}
            target="_blank"
            rel="noopener"
            color="primary"
            style={{ textDecoration: "none" }}
          >
            Upande Ltd
          </Link>{" "}
          being responsible for the technical development of the Web and mobile
          applications.
        </Typography>
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
      </Container>
    </div>
  );
}
