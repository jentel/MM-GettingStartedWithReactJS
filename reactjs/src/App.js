import React, { Component } from 'react';
import logo from './food-bacon.png';
import './App.css';
import { Link, Route,Switch } from 'react-router-dom';

import SurveyForm from "./Components/SurveyForm";
import {BaconIpsum} from './Components/BaconIpsum';
import {BaconCarousel} from './Components/BaconCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/survey">Survey</Link></li>
          </ul> 
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bacon</h1>
         
         
        
     
        </header>

        <Switch className="App-intro">
          <Route exact path="/" component={BaconCarousel}/>
          <Route path="/about" component={BaconIpsum}/>
          <Route path="/survey" component={SurveyForm}/> 
        </Switch>  
      
      </div>
    );
  }
}

export default App;