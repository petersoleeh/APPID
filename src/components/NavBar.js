import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Button } from "./Button";

import SearchBar from "./SearchBar";
import SearchResults from './SearchResults'
import handleSubmit from './../App'

import "./NavBar.css";

import gbif from './../api/gbif'


function NavBar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [isLoading, setisLoading] = useState(true);
  
  const [bees, setBees] = useState()
  

  const handleSubmit = async (searchTerm) => {
    const response = await gbif.get("search", {
      params: {
        q: searchTerm,
        
      },
    });
    // console.log(response.data);
    return(
    setBees(response.data),
    setisLoading(false)
    )
  //   // this.setState({
  //   //   bees: response.data.results,
  //   //   selectedBees: response.data.results[0],
  //   // });
  };

  window.addEventListener("resize", showButton);
  
  if (isLoading){
  return (
    
    <React.Fragment>
        {/* {console.log(bees)} */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            APPID <i className="fab fa-forumbee" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <SearchBar onFormSubmit={handleSubmit}/>
            </li> */}

            <li className="nav-item">
              <Link
                to="/observations"
                className="nav-links"
                onClick={closeMenu}
              >
                Observations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/maps" className="nav-links" onClick={closeMenu}>
                Maps
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={{ pathname: "https://fe.africanplantpollinatorinteractions.org/accounts/register/" }} target="_blank"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Register</Button>}
        </div>
      </nav>
    </React.Fragment>
  );
  }else {

    return(

    <React.Fragment>
    {console.log(bees)}
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        ICIPE <i className="fab fa-forumbee" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* <li className="nav-item">
          <SearchBar onFormSubmit={handleSubmit}/>
        </li> */}

        <li className="nav-item">
          <Link
            to="/observations"
            className="nav-links"
            onClick={closeMenu}
          >
            Observations
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/maps" className="nav-links" onClick={closeMenu}>
            Maps
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={{ pathname: "https://fe.africanplantpollinatorinteractions.org/accounts/register/#/" }} target="_blank"
            className="nav-links-mobile"
            onClick={closeMenu}
          >
            Register
          </Link>
        </li>
      </ul>
      {button && <Button buttonStyle="btn--outline">Register</Button>}
    </div>
  </nav>
</React.Fragment>
)

  }
}

export default NavBar;
