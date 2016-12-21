import { combineReducers } from 'redux';
import * as globalTypes from '../constants/globalActionTypes.js';
import creationReducer from '../components/character_creation/creationReducer.js';
import gameCharacter from '../engine/character/characterReducer.js';
import world from '../engine/world/worldReducer.js';
import gameLoop from '../engine/game_loop/gameLoopReducer.js';
import gameData from '../engine/game_data/gameDataReducer.js';

const initialState = {
	renderLayer: 'MAIN_MENU'	
}

const renderLayer = (state = initialState.renderLayer, action) => {
	switch(action.type){
    case globalTypes.CHANGE_LAYER:
      return action.layer
    case 'LOAD_CHARACTER':
      return 'CHARACTER_CREATION'
    case globalTypes.GAME_START:
      return 'GAME_LAYOUT'
    case globalTypes.DISPLAY_SAVE_LOAD:
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
  gameLoop,
  gameData
})

 export default rootReducer;