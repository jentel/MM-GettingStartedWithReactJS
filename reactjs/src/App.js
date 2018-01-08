import React, { Component } from 'react';
import logo from './food-bacon.png';
import './App.css';
import { Link, Route,Switch } from 'react-router-dom';

import SurveyForm from "./Components/SurveyForm";
import {BaconIpsum} from './Components/BaconIpsum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bacon</h1>
         
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/survey">Survey</Link></li>
            </ul> 
          </nav>
        
     
        </header>

        <Switch className="App-intro">
          <Route exact path="/" component={Category}/>
          <Route path="/about" component={BaconIpsum}/>
          <Route path="/survey" component={SurveyForm}/> 
        </Switch>  
      
      </div>
    );
  }
}

/*Category component*/
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)


export default App;