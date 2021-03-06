import rootReducer from './reducers';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { configureStore } from '@reduxjs/toolkit'

const middleware = [thunk]; 

const store = createStore(

    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(... middleware)),

);

 export default store;