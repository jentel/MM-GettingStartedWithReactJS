// 1.) create a store

import {combineReducers, createStore} from 'redux';

// const reducer = (state, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state += action.incrementValue;
//             break;
//         case "DECREMENT":
//             return state -= action.incrementValue;
//             break;
//     }
//     return state;
// }

const userInformationReducer = (state={}, action) => {
    // state === userInformation
    switch(action.type){
        case "UPDATE_USER_NAME":
            // state.name = action.payload;
            return { ... state, name: action.payload}            
            break;
        case "UPDATE_USER_AGE":
            //state.age = action.payload;
            return { ... state, age: action.payload}
            break;
        default:
            return state;
    }
    return state;
}

const preferredGreetingReducer = (state="", action) => {
    // state === preferredGreeting
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

/*
    Actual JSON
    {
        userInformation: {
            ..
        }
        password:
        FetchingCall:
        ...
    }
*/

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

// this is bad form but we'll keep it for now
// applicationStore.dispatch({type:"INCREMENT", incrementValue:64});
// applicationStore.dispatch({type:"INCREMENT", incrementValue:32});
// applicationStore.dispatch({type:"INCREMENT", incrementValue:1});
// applicationStore.dispatch({type:"INCREMENT", incrementValue:52});
// applicationStore.dispatch({type:"DECREMENT", incrementValue:1000});


