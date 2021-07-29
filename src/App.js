import React from "react";

import "./App.css";

import Home from './components/pages/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// import { Container, Grid, Paper, Typography } from "@material-ui/core";

import NavBar from "./components/NavBar";
import Footer from './components/pages/Footer'
import About from "./components/pages/About";
import ErrorFourOFour from "./components/pages/ErrorFourOFour"

import SearchBar from "./components/SearchBar";
import FullMap from "./components/FullMap";

import ObservationDetail from './components/ObservationDetail'
import ObservationList from './components/ObservationList'
import SearchResults from "./components/SearchResults";

import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

import SignIn from "./components/SignIn"

// import SearchResults from "./components/SearchResults";

// import ObservationList from "./components/ObservationList";

// import GbifResults from "./components/GbifResults";

// import MapGbifData from "./components/MapData";

import gbif from "./api/gbif";
// import gbif2 from "./api/gbif2";

class App extends React.Component {
  
  
  constructor() {
    window.scrollTo(0, 0);
    super();

    this.state = {
      bees: [],
      selectedBees: null,
      // gbifData: [],
      loading: false,
      // MapData: []
    };
  }
  

  // async componentDidMount(){
    // handleSubmit()
    // .then((res)=> {
    //   this.setState({
    //     bees:res.data
    //   })
    // })
  // }

  handleSubmit = async (searchTerm) => {
    const response = await gbif.get("search", {
      params: {
        q: searchTerm,
        limit: 10
      },
    });
    console.log(response.data);

    this.setState({
      bees: response.data.results,
      selectedBees: response.data.results[0],
    });
  };

  // async componentDidMount() {
  //   await gbif2.get("search", {
  //     params: {
  //       limit: 6
  //     }
  //   }).then((res) => {
  //     this.setState({
  //       gbifData: res.data,
  //       MapData: res.data,
  //       loading: true,
  //     });
  //   });
  // }






  render() {
    const { selectedBees, bees } = this.state;
    // const { gbifData, loading } = this.state;
    // const { MapData } = this.state;

    return (
      // <React.Fragment>
      //   <Router>
      //     <NavBar />
      //     <Switch>
      //       <Route path="/" exact />
      //     </Switch>
      //     <Grid container justify="center" spacing={10}>
      //       <Grid item xs={12}>
      //         <Grid container spacing={10}>
      //           <Grid item xs={12}>
      //             <SearchBar onFormSubmit={this.handleSubmit} />
      //           </Grid>
      //           <Grid item xs={12}>
                  // <SearchResults bees={selectedBees}   />
      //             <GbifResults gbifData={gbifData} loading={loading} />
      //           </Grid>
      //           <Grid item xs={12}>
      //             <ObservationList bees={bees} />
      //           </Grid>
      //           {/* <Grid item xs={6}>
      //             Display footer
      //           </Grid> */}
      //         </Grid>
      //       </Grid>
      //     </Grid>
      //   </Router>
      // </React.Fragment>
      <React.Fragment>

    {/* <UserProvider>
      <Application />
    </UserProvider> */}
    
        <Router>
          <NavBar />
      
          {/* <Footer /> */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/observations" exact component={ObservationList} />
            <Route path="/about" exact component={About} />
            <Route path='/observations/:id' exact component={ObservationDetail} />
            <Route path='/maps' exact component={FullMap} />
            <Route path='/login' exact component={SignIn} />
            <Route path='/results' exact component={SearchResults} bees={bees} />


            <Route path="*" component={ErrorFourOFour} />
          </Switch>
          {/* <Container style={{ marginTop: "30px" }}>
            <Paper style={{ backgroundColor: "#cfe8fc", height: "60vh" }}>
              here
            </Paper>
            <Grid item xs={12} style={{ marginTop: "50px"}}>
              <Typography variant="h4">Recent Observations</Typography>
            </Grid>
            <Grid item xs={12}  style={{ marginTop: "50px" }}>
              <GbifResults gbifData={gbifData} loading={loading} />
            </Grid>
            <Grid item xs={12} style={{ marginTop: "50px"}}>
              <Typography variant="h4">Map </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "50px"}}>
              <MapGbifData MapData={MapData} loading={loading}/>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "50px"}}>
              <Typography variant="h4">Partners </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "50px"}}> */}
              {/* <MapGbifData MapData={MapData} loading={loading}/> */}
            {/* </Grid>
          </Container> */}
          <Footer />

        </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
