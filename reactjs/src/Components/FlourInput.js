import React, {Component} from 'react';

export class FlourInput extends Component{
    handleInputChange = (event) => {
      this.props.onInputChange(event.target.value);
    }
  
    render(){
      return (
        <input value={this.props.flour} onChange={this.handleInputChange}/>
      ) 
    }
  }