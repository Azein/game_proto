import * as types from '../constants/actionTypes.js';


export const changeLayer = (layer) => {
  return {type: types.CHANGE_LAYER, layer}
}

export const gameStart = (createdCharacter) => {
  return {type: types.GAME_START, createdCharacter}
}
