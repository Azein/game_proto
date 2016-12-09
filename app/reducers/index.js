import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes.js';
//import {descrKey, creationStats, origin, characterName} from '../components/character_creation/creationReducer.js';
import creationReducer from '../components/character_creation/creationReducer.js';
const initialState = {
	renderLayer: 'MAIN_MENU'	
}

const renderLayer = (state = initialState.renderLayer, action) =>{
	switch(action.type){
    case types.CHANGE_LAYER:
      return action.layer
    case 'LOAD_CHARACTER':
      return 'CHARACTER_CREATION'
    default:
      return state
  }
}

const rootReducer = combineReducers({
  renderLayer,
  creationReducer
})

/*const rootReducer = combineReducers({
  creationStats, 
  renderLayer,
  descrKey,
  origin,
  characterName
}) */

 export default rootReducer;