import baconIpsumFetchAPIData from '../Actions/baconIpsumFetchingAPIDataAction';
import baconIpsumFetchAPIDataComplete from '../Actions/baconIpsumFetchingAPIDataCompleteAction';
import baconIpsumUpdateBaconText from '../Actions/baconIpsumUpdateBaconText';
import axios from 'axios';

export default function getBaconIpsumData() {
    return (dispatch, getState) => {
        dispatch(baconIpsumFetchAPIData());

        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
            .then((results) => {
                let updateValue = "";

                for(let i = 0; i < results.data.length; i++) {
                    updateValue = updateValue + " " + results.data[i];
                }

                dispatch(baconIpsumUpdateBaconText(updateValue));
                dispatch(baconIpsumFetchAPIDataComplete());
            })
            // .catch(() => {

            // })
    }
}