import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

import AppWrapper from './app_wrapper/app.js';


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
) 

ReactDOM.render(
  <Provider store={store}>
   
    <AppWrapper />

  </Provider>
  ,
  document.getElementById('app')
)