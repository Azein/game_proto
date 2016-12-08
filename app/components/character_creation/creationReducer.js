import * as types from './actionTypes.js';

const creationState = {
  descrKey: 'default',
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

export const descrKey = (state = creationState.descrKey, action) => {
  switch (action.type) {
    case types.CREATION_SHOW_DESCR:
      return action.descr
    case types.CHANGE_ORIGIN:
      return action.origin
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

export const origin = (state = creationState.origin, action) => {
  switch (action.type) {
    case types.CHANGE_ORIGIN:
      return {...creationState.origin, [action.origin]: true}
    default:
      return state
  }
}