// // import { render } from '@testing-library/react'
import React from "react";
import { Link } from "react-router-dom";

import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

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
  window.scrollTo(0, 0);
  if (!loading) {
    return (
      <React.Fragment>
        <Box>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={2}>
                <Card>
                  <CardActionArea>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"100%"}
                      height={"150px"}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Card>
                  <CardActionArea>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"100%"}
                      height={"150px"}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Card>
                  <CardActionArea>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"100%"}
                      height={"150px"}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Card>
                  <CardActionArea>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"100%"}
                      height={"150px"}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Card>
                  <CardActionArea>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"100%"}
                      height={"150px"}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Card>
                  <CardActionArea>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"100%"}
                      height={"150px"}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </React.Fragment>
    );
  } else {
    window.scrollTo(0, 0);
    console.log(gbifData);
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {gbifData.data.slice(0, 6).map((data) => (
              <Grid item key={data._id} xs={12} sm={6} md={2}>
                <Link to={`/observations/${data._uuid}`}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={data.genericName}
                        height="150"
                        // image={data._attachments.map(img => {
                        //   if (data_attachments.length===0) {
                        //     return(`https://images.unsplash.com/photo-1427847907429-d1ba99bf013d`)
                        //   }else{
                        //     return(
                        //       img.download_url
                        //     )
                        //   }
                        // })}
                        image={data._attachments.slice(0, 1).map((img) => {
                          console.log(data._attachments.length);
                          return data._attachments.length == 0
                            ? `https://source.unsplash.com/Mkk_9x42Sbg`
                            : img.download_url;
                        })}
                        title={data.name}
                      />
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.acceptedScientificName}
                          </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Recorded By: {data.recordedBy}
                        </Typography>
                      </CardContent> */}
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
};

export default GbifResults;

// import { render } from '@testing-library/react'
// import React from "react";
// import { Link } from "react-router-dom";

// import Skeleton from "@material-ui/lab/Skeleton";
// import Box from "@material-ui/core/Box";

// import {
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   Card,
//   Container,
//   Grid,
// } from "@material-ui/core";

// const GbifResults = ({ gbifData, loading }) => {
//   if (!loading) {
//     return (
//       <React.Fragment>
//         <Box>
//           <Container maxWidth="lg">
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6} md={2}>
//                 <Card>
//                   <CardActionArea>
//                     <Skeleton
//                       animation="wave"
//                       variant="rect"
//                       width={"100%"}
//                       height={"150px"}
//                     />
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={6} md={2}>
//                 <Card>
//                   <CardActionArea>
//                     <Skeleton
//                       animation="wave"
//                       variant="rect"
//                       width={"100%"}
//                       height={"150px"}
//                     />
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={6} md={2}>
//                 <Card>
//                   <CardActionArea>
//                     <Skeleton
//                       animation="wave"
//                       variant="rect"
//                       width={"100%"}
//                       height={"150px"}
//                     />
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={6} md={2}>
//                 <Card>
//                   <CardActionArea>
//                     <Skeleton
//                       animation="wave"
//                       variant="rect"
//                       width={"100%"}
//                       height={"150px"}
//                     />
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={6} md={2}>
//                 <Card>
//                   <CardActionArea>
//                     <Skeleton
//                       animation="wave"
//                       variant="rect"
//                       width={"100%"}
//                       height={"150px"}
//                     />
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={6} md={2}>
//                 <Card>
//                   <CardActionArea>
//                     <Skeleton
//                       animation="wave"
//                       variant="rect"
//                       width={"100%"}
//                       height={"150px"}
//                     />
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </React.Fragment>
//     );
//   } else {
//     // console.log(gbifData);
//     return (
//       <React.Fragment>
//         <Container maxWidth="lg">
//           <Grid container spacing={3}>
//             {gbifData.results.slice(0, 6).map((data) => (
//               <Grid item key={data.key} xs={12} sm={6} md={2}>
//                 <Link to={`/observations/${data.key}`}>
//                   <Card>
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         alt={data.genericName}
//                         height="150"
//                         // image={data.media.map(img => {
//                         //   if (Array.length===0) {
//                         //     return(`https://images.unsplash.com/photo-1427847907429-d1ba99bf013d`)
//                         //   }else{
//                         //     return(
//                         //       img.identifier
//                         //     )
//                         //   }
//                         // })}
//                         image={data.media.map((img) => {
//                           return img.length === 0
//                             ? "https://images.unsplash.com/photo-1427847907429-d1ba99bf013d"
//                             : img.identifier;
//                         })}
//                         title={data.genericName}
//                       />
//                       {/* <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             {data.acceptedScientificName}
//                           </Typography>
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           component="p"
//                         >
//                           Recorded By: {data.recordedBy}
//                         </Typography>
//                       </CardContent> */}
//                     </CardActionArea>
//                   </Card>
//                 </Link>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </React.Fragment>
//     );
//   }
// };

// export default GbifResults;
