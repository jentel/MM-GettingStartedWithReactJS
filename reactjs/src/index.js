import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {combineReducers, createStore} from 'redux';

const userInformationReducer = (state={}, action) => {
    switch(action.type){
        case "UPDATE_USER_NAME":
            return { ... state, name: action.payload}            
            break;
        case "UPDATE_USER_AGE":
            return { ... state, age: action.payload}
            break;
        default:
            return state;
    }
    return state;
}

const preferredGreetingReducer = (state="", action) => {
    switch(action.type)
    {
        case "UPDATE_PREFERRED_GREETING":
            state = action.payload;
            break;
        default:
            return state;
    }
    return state;
}

const reducers = combineReducers({
    userInformation: userInformationReducer,
    preferredGreeting: preferredGreetingReducer
})

const applicationStore = createStore(reducers, {
    userInformation: {
        name: "Rick",
        age: 52,
        email:"tonyt@magenic.com"
    },
    preferredGreeting: "Hello"
});

applicationStore.subscribe(() => {
    console.log("Store has been updated", applicationStore.getState());
})

applicationStore.dispatch({type:"UPDATE_USER_NAME", payload:"Morty"});
applicationStore.dispatch({type:"UPDATE_USER_NAME", payload:"Nick"});
applicationStore.dispatch({type:"UPDATE_USER_NAME", payload:"Tony"});
applicationStore.dispatch({type:"UPDATE_USER_NAME", payload:"Art"});
applicationStore.dispatch({type:"UPDATE_USER_AGE", payload:14});
applicationStore.dispatch({type:"UPDATE_PREFERRED_GREETING", payload:"Oh Geez!"});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

