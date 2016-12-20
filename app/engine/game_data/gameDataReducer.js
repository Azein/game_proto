import * as globalTypes from '../../constants/globalActionTypes.js';
import { combineReducers } from 'redux';

const initialState = {
  saveLoadStatus: 'save'
}

const saveLoadStatus = (state = initialState.saveLoadStatus, action) => {
  switch(action.type){
    case globalTypes.DISPLAY_SAVE_LOAD:
      return action.status
    default:
      return state
  }
}

const gameData = combineReducers({
  saveLoadStatus
})

export default gameData;