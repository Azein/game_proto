import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes.js';
import {descrKey, creationStats, origin} from '../components/character_creation/creationReducer.js';

const initialState = {
	renderLayer: 'MAIN_MENU'	
}

const renderLayer = (state = initialState.renderLayer, action) =>{
	switch(action.type){
    case types.CHANGE_LAYER:
      return action.layer
    default:
      return state
  }
}

const rootReducer = combineReducers({
  creationStats, 
  renderLayer,
  descrKey,
  origin
}) 

 export default rootReducer;