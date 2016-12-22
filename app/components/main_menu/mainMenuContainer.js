import  { connect } from 'react-redux';
import MainMenu from './mainMenu.js';
import {changeLayer} from '../../actions/generalActions.js';
import { displaySaveLoad } from '../../engine/game_data/gameDataActions.js';

const mapDispatchToProps = (dispatch) => {
	return{
		changeLayer: (layer) => {
			dispatch(changeLayer(layer))
		},
    displaySaveLoad: (status) => {
      dispatch(displaySaveLoad(status))
    }
	}
}

const MainMenuContainer = connect(
  null,
  mapDispatchToProps
	)(MainMenu);

export default MainMenuContainer;