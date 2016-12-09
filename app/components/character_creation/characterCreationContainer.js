import  { connect } from 'react-redux';
import CharacterCreation from './characterCreation.js';
import {statsObject, originObject} from './creationText.js';
import {changeLayer} from '../../actions/generalActions.js';
import {showDescr, statPlus, statMinus, changeOrigin, changeName} from './charCreationActions.js';

const showActiveDescr = (key) => {
  if (key === 'default') {
    return ''
  }	else if (statsObject[key] != undefined) {
    console.info(statsObject[key])
    return statsObject[key].descr
  } else {
    return originObject[key].descr
  }
}

const mapStateToProps = (state) => {
	
	return{
		activeDescr: showActiveDescr(state.creationReducer.descrKey),
    stats: state.creationReducer.creationStats,
    origin: state.creationReducer.origin,
    characterName: state.creationReducer.characterName  
	}
}

const mapDispatchToProps = (dispatch) => {

	return{
		changeLayer: (layer) => {
			dispatch(changeLayer(layer))
		},

		showDescr: (descr) =>{
			dispatch(showDescr(descr))
		},

    statPlus: (stat) => {
      dispatch (statPlus(stat))
    },
    
    statMinus: (stat) => {
      dispatch (statMinus(stat))
    },

    changeOrigin: (origin) => {
      dispatch (changeOrigin(origin))
    },

    changeName: (name) => {
      dispatch (changeName(name))
    }
	}
}

const CharacterCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
	)(CharacterCreation);

export default CharacterCreationContainer;