import React, {Component} from 'react';

export class BucketInput extends Component{
    handleOnChange = (event) => {
      this.props.onInputChange(event.target.value);
    }
    
    render(){
      return (
        <input value={this.props.buckets} onChange={this.handleOnChange}/>
      )
    }
  }