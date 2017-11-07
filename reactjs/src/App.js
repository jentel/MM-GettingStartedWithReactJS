import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }

  render(){
    return <input value={this.state.name} onInput={this.handleInputChange}/>
  }
}

class FlourInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }

  render(){
    return <input value={this.state.name} onInput={this.handleInputChange}/>
  }
}

class BucketInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Buckets?"
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }
  
  render(){
    return <input value={this.state.name} onInput={this.handleInputChange}/>
  }
}

class SurveyForm extends Component{

  handleSubmit = (event)=>
  {
    alert("hello world");
    console.log("hello world");

    event.preventDefault();
  }

  render(){
    return (
      <forms onSubmit={this.handleSubmit}>
        <p>What is your name?</p>
        <NameInput></NameInput>
        <br />
        <p>What kind of flour do you like? (Yes, as in the baking kind)</p>
        <FlourInput></FlourInput>
        <br />
        <p>What kind of Buckets do you like?</p>
        <BucketInput></BucketInput>
        <br/>
        <input type="submit" value="Submit"/>
      </forms>
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