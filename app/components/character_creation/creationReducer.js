import * as types from './actionTypes.js';
import {combineReducers} from 'redux';

const creationState = {
  descrKey: 'default',
  characterName: '',
  statCalc: {
    endurance: 5,
    attentiveness: 5,
    cunning: 5,
    charisma: 5,
    statPoints: 5
  },
  
  origin: {
    aviamech: false,
    student: false,
    devourer: false,
    scientist: false,
    migrant: false,
    pracevach: false
  }
}

const descrKey = (state = creationState.descrKey, action) => {
  switch (action.type) {
    case types.CREATION_SHOW_DESCR:
      return action.descr
    case types.CHANGE_ORIGIN:
      return action.origin
    case types.LOAD_CHARACTER:
      return 'default'
    default:
      return state
  }
}

const creationStats = (state = creationState.statCalc, action) => {
  switch (action.type) {
    case types.STAT_INCREMENT:
      return {...state, [action.stat]: state[action.stat] + 1, statPoints: state.statPoints - 1 }
    case types.STAT_DECREMENT:
      return {...state, [action.stat]: state[action.stat] - 1, statPoints: state.statPoints + 1 }
    case types.LOAD_CHARACTER:
      return action.character.statCalc
    default:
      return state
  }
}

const origin = (state = creationState.origin, action) => {
  switch (action.type) {
    case types.CHANGE_ORIGIN:
      return {...creationState.origin, [action.origin]: true}
    case types.LOAD_CHARACTER:
      return action.character.origin
    default:
      return state
  }
}

const characterName = (state =creationState.characterName, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return action.name
    case types.LOAD_CHARACTER:
      return action.character.characterName
    default:
      return state
  }
}

const creationReducer = combineReducers({
  creationStats, 
  descrKey,
  origin,
  characterName
}) 

export default creationReducer;