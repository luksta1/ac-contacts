import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import contacts from './contacts';

const reducer = combineReducers({ contacts });

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware);

export default store;
export * from './contacts';