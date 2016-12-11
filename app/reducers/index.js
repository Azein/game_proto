import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes.js';
import creationReducer from '../components/character_creation/creationReducer.js';
import gameCharacter from '../engine/character/characterReducer.js';
const initialState = {
	renderLayer: 'MAIN_MENU'	
}

const renderLayer = (state = initialState.renderLayer, action) =>{
	switch(action.type){
    case types.CHANGE_LAYER:
      return action.layer
    case 'LOAD_CHARACTER':
      return 'CHARACTER_CREATION'
    case types.GAME_START:
      return 'GAME_LAYOUT'
    default:
      return state
  }
}

const rootReducer = combineReducers({
  renderLayer,
  creationReducer,
  gameCharacter
})

 export default rootReducer;