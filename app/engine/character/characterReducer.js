import * as types from './actionTypes.js';
import * as globalTypes from '../../constants/globalActionTypes.js';
import {combineReducers} from 'redux';

const initialState = {
  level: 1,

  skills: {
    freeSkills: 0,
    skillSet: {  
      ms_excel: 0,
      prorabotka: 0
    }
  },
  
  perks: {
    lucky_worker: false,
    excel_senior: false
  },

  state_params: {
    energy: 10
  }
}

const ingameStats = (state = initialState, action) => {
  switch(action.type){
    case globalTypes.LOAD_GAME:
      return action.gameCharacter.ingameStats
    default:
      return state
  }
}

const initialStats = (state = {}, action) => {
  switch(action.type){
    case types.GAME_START:
      return action.createdCharacter
    case globalTypes.LOAD_GAME:
      return action.gameCharacter.initialStats
    default:
      return state
  }
}

const gameCharacter = combineReducers({
  ingameStats,
  initialStats
})

export default gameCharacter;