import React, {Component} from 'react';

export class FlourInput extends Component{
    handleInputChange = (event) => {
      this.props.onInputChange(event.target.value);
    }
  
    render(){
      return (
        <div>
          <p>What kind of flour do you like? (Yes, as in the baking kind)</p>
          <input value={this.props.flour} onChange={this.handleInputChange}/>
        </div>
      ) 
    }
  }