import React, {Component} from 'react';

import {NameInput} from "./NameInput";
import {FlourInput} from "./FlourInput";
import {BucketInput} from "./BucketInput";
import {FormErrors} from "./FormErrors";

import {connect} from 'react-redux';

import updateUserName from "../Actions/updateUserNameAction";
import updateFlourType from '../Actions/updateFlourTypeAction';
import updateBucketCount from '../Actions/updateBucketCountAction';
import udpateFormErrors from '../Actions/updateFormErrorsAction';

import store from '../AppStore';

@connect((store) => {
  return {
    name: store.nameReducer,
    flour: store.flourReducer,
    buckets: store.bucketReducer,
    formErrors: store.formErrorsReducer
  }
})

export class SurveyForm extends Component{  
  handleSubmit = (event)=>
  {
    alert(JSON.stringify(this.props));
    event.preventDefault();
  }

  handleNameInputChange = (nameValue) => {
    this.props.dispatch(updateUserName(nameValue));
  }

  handleFlourInputChange = (flourValue) => {
    this.props.dispatch(updateFlourType(flourValue));
  }

  handleBucketInputChange = (bucketValue) => {
    this.props.dispatch(updateBucketCount(bucketValue));
    this.validateForm();
  }

  validateForm = () => {
    let currentBucket = store.getState()["bucketReducer"];
    let bucketCountValid = "";

    if(currentBucket < 5 && currentBucket !== ''){
        bucketCountValid = "I think you need more flour. You never know how many cookies you may want.";
    }

    this.props.dispatch(udpateFormErrors({bucketCountValidation: bucketCountValid}));
  }

  render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <NameInput name={this.props.name} onInputChange={this.handleNameInputChange} />
                <br />
                <FlourInput flour={this.props.flour} onInputChange={this.handleFlourInputChange} />
                <br />
                <BucketInput buckets={this.props.buckets} onInputChange={this.handleBucketInputChange} />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <FormErrors errors={this.props.formErrors}></FormErrors>
        </div>
    )
  }
}