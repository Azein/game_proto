import * as types from './gameLoopActionTypes.js';
import { combineReducers } from 'redux';

const initialState = {
  worldProcess: true
}

const gameLoop = (state = initialState, action) => {
  switch(action.type){
    case types.GAME_PAUSE:
      return {
        ...state,
        worldProcess: false
      }
    case types.GAME_CONTINUE:
      return {
        ...state,
        worldProcess: true
      }
    default:
      return state
  }
}

export default gameLoop;