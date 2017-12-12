import React, {Component} from 'react';

export class BucketInput extends Component{
    handleOnChange = (event) => {
      this.props.onInputChange(event.target.value);
    }
    
    render(){
      return (
        <div>
          <p>How many buckets of flour do you want?</p>
          <input value={this.props.buckets} onChange={this.handleOnChange}/>
        </div>
      )
    }
  }