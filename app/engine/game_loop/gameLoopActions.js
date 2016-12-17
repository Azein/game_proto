import * as types from './gameLoopActionTypes.js';

export const gamePause = () => {
  return {
    type: types.GAME_PAUSE
  }
}

export const gameContinue = () => {
  return {
    type: types.GAME_CONTINUE
  }
}