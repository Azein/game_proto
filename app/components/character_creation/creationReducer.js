import * as types from './actionTypes.js';

const creationState = {
  descrKey: 'default',
  statCalc:{
    endurance: 5,
    attentiveness: 5,
    cunning: 5,
    charisma: 5,
    statPoints: 5
  }
}

export const descrKey = (state = creationState.descrKey, action) => {
  switch (action.type) {
    case types.CREATION_SHOW_DESCR:
      return action.descr

    default:
      return state
  }
}

export const creationStats = (state = creationState.statCalc, action) => {
  switch (action.type) {
    case types.STAT_INCREMENT:
      return {...state, [action.stat]: state[action.stat] + 1, statPoints: state.statPoints - 1 }
    case types.STAT_DECREMENT:
      return {...state, [action.stat]: state[action.stat] - 1, statPoints: state.statPoints + 1 }
    default:
      return state
  }
}