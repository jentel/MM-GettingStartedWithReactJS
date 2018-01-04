import React, {Component} from 'react';

export class BaconStripsInput extends Component{
    handleInputChange = (event) => {
      this.props.onInputChange(event.target.value);
    }
    
    render(){
      return (
        <div>
          <p>How many strips of bacon do you want?</p>
          <input value={this.props.baconStrip} onChange={this.handleInputChange}/>
        </div>
      )
    }
  }