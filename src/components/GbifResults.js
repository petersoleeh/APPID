// import { render } from '@testing-library/react'
import React from 'react'

import {
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Card,
    Container,
    Grid,
  } from "@material-ui/core";


const GbifResults = ({ gbifData, loading }) => {

    if (!loading) {
        return (<div><span>Loading...</span></div>)
    }else {

    console.log(gbifData)

        return (
            <React.Fragment>
            <Container maxWidth="lg" >
              <Grid container spacing={3} >
                {gbifData.results.map((data) => (
                  <Grid item key={data.key} xs={12} sm={6} md={2}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt= {data.genericName}
                          height="150"
                          image= {data.media[0].identifier}
                          title= {data.genericName}
                        />
                        <CardContent>
                          {/* <Typography gutterBottom variant="h5" component="h2">
                            {data.acceptedScientificName}
                          </Typography> */}
                          <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                         Recorded By: {data.recordedBy} 
                        </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </React.Fragment>
        )
    }
}





export default GbifResults
