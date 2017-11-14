import React, {Component} from 'react';

import {NameInput} from "./NameInput";
import {FlourInput} from "./FlourInput";
import {BucketInput} from "./BucketInput";
import {FormErrors} from "./FormErrors";

export class SurveyForm extends Component{
      constructor(props){
        super(props);
    
        this.state = {
          name:"",
          flour:"",
          buckets:"",
          formErrors: {
              nameAlphabetValidation: "",
              bucketCountValidation: ""
          }
        }
      }
    
      handleSubmit = (event)=>
      {
        alert(JSON.stringify(this.state));
    
        event.preventDefault();
      }
    
      handleNameInputChange = (nameValue) => {
        this.setState({name: nameValue});
      }
    
      handleFlourInputChange = (flourValue) => {
        this.setState({flour: flourValue});
      }
    
      handleBucketInputChange = (bucketValue) => {
        this.setState({buckets: bucketValue}, this.validateForm());
      }

      validateForm = () => {
        let currentBucket = this.state.buckets;
        let bucketCountValidation = "";

        if(currentBucket < 5){
            bucketCountValidation = "You need more antioxidants in your day";
        }

        this.setState({
                formsErrors:{
                    nameAlphabetValidation: "",
                    bucketCountValidation: bucketCountValidation
                }
            }
        )
      }
    
      render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>What is your name?</p>
                    <NameInput name={this.state.name} onInputChange={this.handleNameInputChange}></NameInput>
                    <br />
                    <p>What kind of flour do you like? (Yes, as in the baking kind)</p>
                    <FlourInput flour={this.state.flour} onInputChange={this.handleFlourInputChange}></FlourInput>
                    <br />
                    <p>How many buckets of flour do you want?</p>
                    <BucketInput buckets={this.state.buckets} onInputChange={this.handleBucketInputChange}></BucketInput>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <FormErrors errors={this.state.formErrors}></FormErrors>
            </div>
        )
      }
    }