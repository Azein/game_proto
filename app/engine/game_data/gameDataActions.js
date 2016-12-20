//import * as types from './gameDataActionTypes.js';
import * as globalTypes from '../../constants/globalActionTypes.js';

export const displaySaveLoad = (status) => {
  return {
    type: globalTypes.DISPLAY_SAVE_LOAD,
    status
  }
}