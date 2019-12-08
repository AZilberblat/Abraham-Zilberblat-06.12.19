import React, { useState, useEffect } from 'react';
import CurrentWeather from "./components/weather"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';
import NavRoots from "./routes/NavRoots"
import "./App.css"






const api = "5QdG89dKykTEr5xjK0rnYXxZN9xy5D5r"
const getLocation ="http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5QdG89dKykTEr5xjK0rnYXxZN9xy5D5r&q="
const demo = "london"
const targetUrl=getLocation+demo









export default class App extends React.Component {
  navBar(){
    return (
      <Navbar color="light" light expand="md" >
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={()=>{}} />
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/favorites/">Favorites</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Herolo Weather Task</NavbarText>
        </Collapse>
      </Navbar>


    )
  }
render(){



  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          {this.navBar()}
        </header>
            <div className="container">
              <NavRoots />
            </div>
      </BrowserRouter>
    </div>
  );
}
}