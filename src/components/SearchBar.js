import React from 'react'

// import { withRouter } from 'react-router-dom'

// import { Paper, TextField } from '@material-ui/core'


class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value})
    

    handleSubmit = (event) => {
        const { searchTerm } = this.state
        const { onFormSubmit } = this.props

        onFormSubmit(searchTerm)

        event.preventDefault()
    }

    // submitForm (e) {
    //     e.preventDefault()
    //     this.props.history.push('/results')
    //   }
    

    render() {
        
        return(
                <form onSubmit={this.handleSubmit } >
                    <input   
                        placeholder="Search..."  
                        onChange={this.handleChange}
                        value = {this.state.searchTerm}
                    />
                </form>
        )
    }
}

export default SearchBar