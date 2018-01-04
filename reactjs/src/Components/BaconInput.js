import React, {Component} from 'react';

export class BaconInput extends Component{
    handleInputChange = (event) => {
      this.props.onInputChange(event.target.value);
    }
  
    render(){
      return (
        <div>
          <p>What kind of bacon do you like?</p>
          <input value={this.props.bacon} onChange={this.handleInputChange}/>
        </div>
      ) 
    }
  }