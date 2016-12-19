import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes.js';
import creationReducer from '../components/character_creation/creationReducer.js';
import gameCharacter from '../engine/character/characterReducer.js';
import world from '../engine/world/worldReducer.js';
import gameLoop from '../engine/game_loop/gameLoopReducer.js';
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
    case 'DISPLAY_SAVE_LOAD':
      return 'SAVE_LOAD'
    default:
      return state
  }
}

const rootReducer = combineReducers({
  renderLayer,
  creationReducer,
  gameCharacter,
  world,
  gameLoop
})

 export default rootReducer;