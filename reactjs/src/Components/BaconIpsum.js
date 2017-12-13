import React, { Component } from 'react';
//import { BaconIpsumService } from '../Services/BaconIpsum.service';

import { connect } from 'react-redux';
import getBaconIpsumData from '../Actions-Thunk/getBaconIpsumData';

// import axios from "axios"

@connect((store) => {
    return {
        data : store.baconIpsumReducer
    }
})
export class BaconIpsum extends Component {
    componentDidMount(){
        this.props.dispatch(getBaconIpsumData());
        // _baconIpsumService.getData();
        // axios.get
    }

    render(){
        const isFetchingData = this.props.data.fetchingData;
        const dataFetched = this.props.data.fetchedData;

        return (
            <div>
                Hello world
                {   
                    isFetchingData ?
                    (
                        <div>
                            Getting the API Data!!
                        </div>
                    ) :
                    null
                }
                {  
                     dataFetched ?
                    (
                        <div>
                            We've got live data!!
                        </div>
                    ) :
                    null
                }
                <div>
                    {this.props.data.baconIpsumText}
                </div>
            </div>
           
        )
    }
}