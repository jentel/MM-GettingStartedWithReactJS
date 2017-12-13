import baconIpsumFetchAPIData from '../Actions/baconIpsumFetchingAPIDataAction';
import baconIpsumFetchAPIDatacComplete from '../Actions/baconIpsumFetchingAPIDataCompleteAction';
import baconIpsumUpdateBaconText from '../Actions/baconIpsumUpdateBaconText';
import axios from 'axios';


export default function getBaconIpsumData(){
    return (dispatch, getState) => {
        dispatch(baconIpsumFetchAPIData())

        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
            .then((results) =>{

                let updateValue = "";

                for(let i = 0; i < results.data.length; i++){
                    updateValue = updateValue + " " + results.data[i]; //.concat(results.data[i])
                }

                dispatch(baconIpsumUpdateBaconText(updateValue))
                dispatch(baconIpsumFetchAPIDatacComplete())
            })
            .catch(() => {
                // if error dispatch error message
                //dispatch(baconIpsumFetchAPIDatacComplete())
            })
    }
}