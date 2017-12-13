import {createStore, applyMiddleware} from 'redux';

import reducers from "./Reducers";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);

//store.dispatch( GET_USER_DATA);

// export function GET_USER_DATA(){
//     return (dispatch, getState) => {
//         dispatch("BEGIN FETCH USERS");
//         // make api call
//         dispatch("FETCHED USERS")
//     }
// }

export default store