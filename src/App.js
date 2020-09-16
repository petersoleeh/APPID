import React from 'react'

import { Grid } from '@material-ui/core'

import SearchBar from './components/SearchBar'

import SearchResults from './components/SearchResults'

import gbif from './api/gbif'


class App extends React.Component {
    state = {
        bees: [],
        selectedBees: null
    }
    handleSubmit = async (searchTerm) => {
        const response = await gbif.get('search', {
            params: {
                q: searchTerm, 
                country: 'KE'
            }
        })

        this.setState({bees: response.data.results, selectedBees: response.data.results[0]})
    }

    render() {
        const {selectedBees} =this.state

        return(
            <Grid container justify='center' spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar  onFormSubmit = {this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={12}>
                            <SearchResults  bees={selectedBees}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* CARD DISPLAY */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App