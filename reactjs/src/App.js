import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Nelson \"Big Head\" Bighetti",
      message: "Hello, "
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleSubmit = ()=>
  {
    alert(this.state.message + this.state.name);
  }

  render(){
    return (
      <div>
        <p>What is your name?</p>
        <input type="text" value={this.state.name} onInput={this.handleInputChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
     </div>
    )
  }
}

class FlourInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "What?",
      message: "You said you liked just "
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleSubmit = ()=>
  {
    alert(this.state.message + this.state.name);
  }

  render(){
    return (
      <div>
        <p>What kind of flour do you like? (Yes, as in the baking kind)</p>
        <input type="text" value={this.state.name} onInput={this.handleInputChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
     </div>
    )
  }
}

class BucketInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Buckets?",
      message: "Didn't know {0} could be someone's favorite type of bucket."
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleSubmit = ()=>
  {
    var format = require('string-format');
    alert(format(this.state.message, this.state.name));
  }
  
  render(){
    return(
      <div>
        <p>What kind of Buckets do you like?</p>
        <input type="text" value={this.state.name} onInput={this.handleInputChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

class SurveyForm extends Component{
  render(){
    return (
      <div>
        <NameInput />
        <FlourInput />
        <BucketInput />
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SurveyForm></SurveyForm>
      </div>
    );
  }
}

export default App;