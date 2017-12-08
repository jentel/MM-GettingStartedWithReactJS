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
        case "UPDATE_USER_ITEM":
            return { ... state, item: action.payload}
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
        name: "Lapinibernatus",
        age: 3000000000,
        item:"Translator Cone"
    },
    preferredGreeting: "*clears throat* Bwa bwa :)"
});

applicationStore.subscribe(() => {
    console.log("Store has been updated", applicationStore.getState());
})

applicationStore.dispatch({type:"UPDATE_USER_NAME", payload:"Rabbid"});
applicationStore.dispatch({type:"UPDATE_USER_AGE", payload:5});
applicationStore.dispatch({type:"UPDATE_USER_ITEM", payload:"Toilet Brush"});
applicationStore.dispatch({type:"UPDATE_USER_NAME", payload:"Rocket Rabbid"});
applicationStore.dispatch({type:"UPDATE_USER_ITEM", payload:"Pressurized Tank"});
applicationStore.dispatch({type:"UPDATE_PREFERRED_GREETING", payload:"BAAAAHHHH BAAAAAAAAAAAAAHHHH!!!!"});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

