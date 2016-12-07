import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import AppWrapper from './app_wrapper/app.js';
import rootSaga from './rootSaga.js';
//import configureStore, {sagaMiddleware} from './storeConfig';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
 return result
}

 const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk, sagaMiddleware)
  );

  if (module.hot) {
    console.log('start')
    module.hot.accept('./reducers/index'.default, function() {
      console.log('replace root reducer')
      var nextRootReducer = require('./reducers/index').default;
      console.info(store) 
      store.replaceReducer(nextRootReducer) ;
    }())
    console.log('end') 
  }
  return store;
}

const store = configureStore();

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper /> 
  </Provider>
  ,
  document.getElementById('app')
)



