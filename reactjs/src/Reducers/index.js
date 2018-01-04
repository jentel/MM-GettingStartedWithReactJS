import {combineReducers} from 'redux';
import nameReducer from './nameReducer';
import flourReducer from './flourReducer';
import bucketReducer from './bucketReducer';
import formErrorsReducer from './formErrorsReducer';
import baconIpsumReducer from './baconIpsumReducer';

export default combineReducers({
    nameReducer,
    flourReducer,
    bucketReducer,
    formErrorsReducer,
    baconIpsumReducer
});