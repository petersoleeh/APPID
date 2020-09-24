import React from 'react'

import {Paper, CardActionArea,CardContent,CardMedia, Button, Typography, Card, Container, Grid, CardActions} from '@material-ui/core'

const SearchResults = ({bees}) => {
    const cards = [1, 2, 3]
    
    if (!bees) 
    
    return (
        <React.Fragment>
        <Container maxWidth='md'>
            <Grid container spacing={4}>
                {cards.map((card) =>
                    <Grid item key = {card} xs={12} sm={6} md={4}>            
                        <Card>
                            <CardActionArea>
                            <CardMedia
                                component = 'img'
                                alt= 'bees'
                                height='140'
                                image= 'https://static.inaturalist.org/photos/74723035/original.jpeg?1590330591'
                                title="bees"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    {/* {bees.acceptedScientificName} */}
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Bees are a widespread group of squamate insects, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color='primary'>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid> 
                )}
            </Grid>
        </Container>
    </React.Fragment>
    )

    console.log(bees.references)

    const imgSrc = bees.references

    // const cards = [1, 2, 3]

    return (
        
        <React.Fragment>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) =>
                        <Grid item key = {card} xs={12} sm={6} md={4}>            
                            <Card>
                                <CardActionArea>
                                <CardMedia
                                    component = 'img'
                                    alt= 'bees'
                                    height='140'
                                    image= {imgSrc}
                                    title="bees"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        {bees.acceptedScientificName}
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Bees are a widespread group of squamate insects, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color='primary'>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                    )}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export  default SearchResults