import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';
import AppWrapper from './app_wrapper/app.js';
import rootSaga from './rootSaga.js';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
 return result
}


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
) 

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
   
    <AppWrapper />

  </Provider>
  ,
  document.getElementById('app')
)