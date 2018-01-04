import {combineReducers} from 'redux';
import nameReducer from './nameReducer';
import baconReducer from './baconReducer';
import baconStripReducer from './baconStripReducer';
import formErrorsReducer from './formErrorsReducer';
import baconIpsumReducer from './baconIpsumReducer';

export default combineReducers({
    nameReducer,
    baconReducer,
    baconStripReducer,
    formErrorsReducer,
    baconIpsumReducer
});