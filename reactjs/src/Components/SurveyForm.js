import React, {Component} from 'react';

import {NameInput} from "./NameInput";
import {BaconInput} from "./BaconInput";
import {BaconStripsInput} from "./BaconStripsInput";
import {FormErrors} from "./FormErrors";

import {connect} from 'react-redux';

import updateUserName from "../Actions/updateUserNameAction";
import updateBaconType from '../Actions/updateBaconTypeAction';
import updateBaconStripsCount from '../Actions/updateBaconStripsCountAction';
import udpateFormErrors from '../Actions/updateFormErrorsAction';

import store from '../AppStore';

const BACON_STRIP_REDUCER = "baconStripReducer";

@connect((store) => {
  return {
    name: store.nameReducer,
    bacon: store.baconReducer,
    baconStrip: store.baconStripReducer,
    formErrors: store.formErrorsReducer
  }
})

export default class SurveyForm extends Component{
    
  handleSubmit = (event)=>
  {
    alert(JSON.stringify(this.props));
    event.preventDefault();
  }

  handleNameInputChange = (nameValue) => {
    this.props.dispatch(updateUserName(nameValue));
  }

  handleBaconInputChange = (baconValue) => {
    this.props.dispatch(updateBaconType(baconValue));
  }

  handleBaconStripInputChange = (baconStripValue) => {
    this.props.dispatch(updateBaconStripsCount(baconStripValue));
    this.validateForm();
  }

  validateForm = () => {
    let currentBacon = store.getState()[BACON_STRIP_REDUCER];
    let baconCountValid = "";
    var regexp = new RegExp("[^0-9]");

    if(currentBacon !== '')
    {
        if(regexp.test(currentBacon))
        {
            baconCountValid = "Those are not numbers!";
        }
        else if(currentBacon < 5){
            baconCountValid = "I think you need more bacon. Bacon is good.";
        }
        else if(currentBacon >= 20){
            baconCountValid = "Woah! Better slow down! We're not one to judge, but eating too much is not good."
        }
    }

    this.props.dispatch(udpateFormErrors({baconStripCountValidation: baconCountValid}));
  }

  render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <NameInput name={this.props.name} onInputChange={this.handleNameInputChange} />
                <br />
                <BaconInput bacon={this.props.bacon} onInputChange={this.handleBaconInputChange} />
                <br />
                <BaconStripsInput baconStrip={this.props.baconStrip} onInputChange={this.handleBaconStripInputChange} />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <FormErrors errors={this.props.formErrors}></FormErrors>
        </div>
    )
  }
}