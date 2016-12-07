import React from 'react';
import ReactDOM from 'react-dom';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
//import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//import rootReducer from './reducers/index';
import AppWrapper from './app_wrapper/app.js';
import rootSaga from './rootSaga.js';
import configureStore from './storeConfig';
import {sagaMiddleware} from './storeConfig';

const store = configureStore();

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper /> 
  </Provider>
  ,
  document.getElementById('app')
)


module.hot.accept();
