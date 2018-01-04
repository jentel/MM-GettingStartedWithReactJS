import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from "./Reducers";

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);

export default store;