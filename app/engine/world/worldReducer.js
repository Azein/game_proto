import * as types from './worldActionTypes.js';
import { combineReducers } from 'redux';

const initialState = {
  ticksPassed: 0,
  daysPassed: 0,
  weeksPassed: 0,
  monthsPassed: 0
}

const time = (state = initialState, action) => {
  switch(action.type){
    case types.TICK_PASSED:
      return {
        ...state,
        ticksPassed: state.ticksPassed + 1
      }
    default:
      return state
  }
}

const world = combineReducers({
  time
})

export default world;