import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import "./Error404.css";

function ErrorFourOFour() {
  return (
    <React.Fragment>
      <section className="page_404">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Grid item sm={12}>
                {/* <Grid item>
                  <Typography
                    align="center"
                    variant="h2"
                    className="text-center "
                  >
                    404
                  </Typography>
                </Grid> */}
                <Grid item className="four_zero_four_bg"></Grid>

                <Grid item className="contant_box_404">
                  <Typography variant="h4" align="center" className="lost">
                    Looks like you're lost
                  </Typography>

                  <Typography
                    component="p"
                    color="textSecondary"
                    align="center"
                  >
                    the page you are looking for is not available!
                  </Typography>
                  <Typography align="center" style={{ marginTop: "20px" }}>
                    <a href="/" className="link_404">
                      Go to Home
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default ErrorFourOFour;
