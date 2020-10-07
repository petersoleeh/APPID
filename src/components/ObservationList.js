import React from 'react'

import ObservationItem from './ObservationItem'

import { Grid } from '@material-ui/core'


const ObservationList = ({bees}) => {
    const ListOfObservations = bees.map((bees, id) => <ObservationItem key={id} bees={bees}/>)
    // console.log(ListOfObservations)
    return (
        <Grid container spacing={4}>
            {ListOfObservations}
        </Grid>
    )

}

export default ObservationList 