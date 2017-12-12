import React, {Component} from 'react';

export class NameInput extends Component{
    handleInputChange = (event) => {
     this.props.onInputChange(event.target.value);
    }
  
    render(){
      return(
        <div>
          <p>What is your name?</p>
          <input value={this.props.name} onChange={this.handleInputChange}/>
        </div>
      )
    }
  }