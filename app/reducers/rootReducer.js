import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes.js';

const initialState = {
	renderLayer: 'MAIN_MENU'	
}

const renderLayer = (state = initialState.renderLayer, action) =>{
	switch(action.type){
    case types.CHANGE_LAYER:
      return action.layer
    default:
      return state
  }
}

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

const descrKey = (state = creationState.descrKey, action) =>{
	switch(action.type){
		case types.CREATION_SHOW_DESCR:
      return action.descr

		default:
      return state
	}
}

 const rootReducer = combineReducers({
   renderLayer,
   descrKey
}) 

 export default rootReducer;