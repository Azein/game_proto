import * as types from './gameDataActionTypes.js';

export const displaySaveLoad = (status) => {
  return {
    type: types.DISPLAY_SAVE_LOAD,
    status
  }
}