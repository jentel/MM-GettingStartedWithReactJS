import React, {Component} from 'react';

export class FormErrors extends Component{
    render(){
        return (
            <div className='form-errors'>
               {Object.keys(this.props.errors).map(
                        (fieldName, i) => {
                            if(this.props.errors[fieldName].length > 0) {
                                return <p>{this.props.errors[fieldName]}</p>
                            }
                            else {
                                return "";
                            }
                        }
                   )}
            </div>
        )
    }
}