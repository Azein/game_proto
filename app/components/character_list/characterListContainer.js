import  { connect } from 'react-redux';
import CharacterList from './characterList.js';
import { changeLayer } from '../../actions/generalActions.js';
import { loadCharacter } from '../character_creation/charCreationActions.js';


const mapDispatchToProps = (dispatch) => {

  return {
    changeLayer: (layer) => {
      dispatch(changeLayer(layer))
    },

    loadCharacter: (character) => {
      dispatch(loadCharacter(character))
    }
  }
}

const CharacterListContainer = connect(
  null,
  mapDispatchToProps
  )(CharacterList);

export default CharacterListContainer;
