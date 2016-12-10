import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
