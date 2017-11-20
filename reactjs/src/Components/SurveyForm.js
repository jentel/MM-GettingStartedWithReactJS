import React, {Component} from 'react';

import {NameInput} from "./NameInput";
// import {FlourInput} from "./FlourInput";
// import {BucketInput} from "./BucketInput";
// import {FormErrors} from "./FormErrors";

import {connect} from 'react-redux';

import updateUserName from "../Actions/updateUserNameAction";

class SurveyForm extends Component{
    
    handleSubmit = (event)=>
    {
      alert(JSON.stringify(this.state));
      event.preventDefault();
    }
  
    handleNameInputChange = (nameValue) => {
      this.props.dispatch(updateUserName(nameValue));
    }
  
    // handleFlourInputChange = (flourValue) => {
    //   this.setState({flour: flourValue});
    // }
  
    // handleBucketInputChange = (bucketValue) => {
    //   this.setState({buckets: bucketValue}, this.validateForm(bucketValue));
    //}

    // validateForm = (bucketValue) => {
    //   let currentBucket = bucketValue;
    //   let bucketCountValidation = "";

    //   if(currentBucket < 5 && currentBucket !== ''){
    //       bucketCountValidation = "I think you need more flour. You never know how many cookies you may want.";
    //   }

    //   this.setState({
    //           formErrors:{
    //               nameAlphabetValidation: "",
    //               bucketCountValidation: bucketCountValidation
    //           }
    //       }
    //   )
    // }
  
    render(){
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <p>What is your name?</p>
                  <NameInput name={this.props.name} onInputChange={this.handleNameInputChange}></NameInput>
                  <br />
                  {/* <p>What kind of flour do you like? (Yes, as in the baking kind)</p>
                  <FlourInput flour={this.state.flour} onInputChange={this.handleFlourInputChange}></FlourInput>
                  <br />
                  <p>How many buckets of flour do you want?</p>
                  <BucketInput buckets={this.state.buckets} onInputChange={this.handleBucketInputChange}></BucketInput>
                  <br/>
                  <input type="submit" value="Submit"/> */}
              </form>
              {/* <FormErrors errors={this.state.formErrors}></FormErrors> */}
          </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps)(SurveyForm);