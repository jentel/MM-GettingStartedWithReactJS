import { BACON_IPSUM_FETCHING_API_DATA } from '../Actions/baconIpsumFetchingAPIDataAction';
import { BACON_IPSUM_FETCHING_API_DATA_COMPLETE } from '../Actions/baconIpsumFetchingAPIDataCompleteAction';
import { BACON_IPSUM_UPDATE_BACON_TEXT } from '../Actions/baconIpsumUpdateBaconText';

const initialState = {
    fetchingData: false,
    fetchedData: false,
    baconIpsumText: "",
    errors: null
}

export default function baconIpsumReducer(state=initialState, action) {
    switch(action.type) {
        case BACON_IPSUM_FETCHING_API_DATA:
            return { ...state, fetchingData: true }
        case BACON_IPSUM_FETCHING_API_DATA_COMPLETE:
            return { ...state, fetchingData: false, fetchedData: true }
        case BACON_IPSUM_UPDATE_BACON_TEXT:
            return { ...state, baconIpsumText: action.payload}
        default:
            return state;
    }
}