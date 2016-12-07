import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
 return result
};

 export const sagaMiddleware = createSagaMiddleware();

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk, sagaMiddleware)
  );

  if (module.hot) {
    console.log('start')
    module.hot.accept('./reducers/index', function() {
      console.log('replace root reducer')
      var nextRootReducer = require('./reducers/index').default;
      console.info(store) 
      store.replaceReducer(nextRootReducer) ;
    }())
    console.log('end') 
  }
  return store;
}