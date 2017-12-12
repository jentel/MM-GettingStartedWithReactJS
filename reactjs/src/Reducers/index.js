import {combineReducers} from 'redux';
import nameReducer from './nameReducer';
import flourReducer from './flourReducer';
import bucketReducer from './bucketReducer';
import formErrorsReducer from './formErrorsReducer';

export default combineReducers({
    nameReducer,
    flourReducer,
    bucketReducer,
    formErrorsReducer
});