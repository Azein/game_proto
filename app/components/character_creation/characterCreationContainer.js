import  { connect } from 'react-redux';
import CharacterCreation from '../components/character_creation/characterCreation.js';
import {statsObject} from '../components/character_creation/creationText.js';

import {changeLayer} from '../actions/generalActions.js';
import {showDescr} from '../actions/charCreationActions.js';


const showActiveDescr = (key) => {
  if (key === 'default') {
    return ''
  }	else {
    return statsObject[key].descr
  }
}

const mapStateToProps = (state) => {
	
	return{
		activeDescr: showActiveDescr(state.descrKey)  
	}
}

const mapDispatchToProps = (dispatch) => {

	return{
		changeLayer: (layer) => {
			dispatch(changeLayer(layer))
		},

		showDescr: (descr) =>{
			dispatch(showDescr(descr))
		}
	}
}

const CharacterCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
	)(CharacterCreation);

export default CharacterCreationContainer;