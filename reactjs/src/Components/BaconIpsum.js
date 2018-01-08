import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBaconIpsumData from '../Actions-Thunk/getBaconIpsumData';

@connect((store) => {
    return {
        data : store.baconIpsumReducer
    }
})

export class BaconIpsum extends Component {

    componentDidMount() {
        this.props.dispatch(getBaconIpsumData());
    }

    render() {
        const isFetchingData = this.props.data.fetchingData;
        const dataFetched = this.props.data.fetchedData;

        return (
            <div>
                <h1>About Us</h1>
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
                <article className="bacon-ipsum">
                    <p>{this.props.data.baconIpsumText}</p>
                </article>
            </div>
        )
    }
}