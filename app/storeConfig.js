import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';


 /* if (module.hot) {
    console.log('starttttt')
    module.hot.accept('./reducers/index'.default, () => {
      console.log('replace root reducer')
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    })
    console.log('end') 
  }*/

/*const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
) */////