import  { connect } from 'react-redux';
import MainMenu from './mainMenu.js';
import {changeLayer} from '../../actions/generalActions.js';

const mapDispatchToProps = (dispatch) => {
	return{
		changeLayer: (layer) => {
			dispatch(changeLayer(layer))
		}
	}
}

const MainMenuContainer = connect(
  null,
  mapDispatchToProps
	)(MainMenu);

export default MainMenuContainer;