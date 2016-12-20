import * as globalTypes from '../constants/globalActionTypes.js';


export const changeLayer = (layer) => {
  return {type: globalTypes.CHANGE_LAYER, layer}
}

export const gameStart = (createdCharacter) => {
  return {type: globalTypes.GAME_START, createdCharacter}
}
