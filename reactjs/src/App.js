import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameInput extends Component{
  render(){
    return(
      <input type="text" value={this.props.nameInput}/>
    )
  }
}

class SurveyForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Tony Tran"
    }
  }

  handleInputChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleSubmit = ()=>
  {
    alert(JSON.stringify(this.state));
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <NameInput nameInput={this.state.name}></NameInput>
        <input type="submit" value="Submit" />
      </form>
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