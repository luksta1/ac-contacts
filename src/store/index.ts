import { applyMiddleware, combineReducers, createStore } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import contacts from './contacts';

const reducer = combineReducers({ contacts });

const middleware = applyMiddleware(thunkMiddleware, loggingMiddleware);

const store = createStore(reducer, middleware);

export default store;
export * from './contacts';