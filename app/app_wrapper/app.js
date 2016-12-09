import React from 'react';
import { connect } from 'react-redux';
import {changeLayer} from '../actions/generalActions.js';
import './app.css';
import MainMenuContainer from '../components/main_menu/mainMenuContainer.js';
import CharacterCreationContainer from '../components/character_creation/characterCreationContainer.js';
import CharacterListContainer from '../components/character_list/characterListContainer.js';

const mapStateToProps = (state) =>{
  return{
    renderLayer: state.renderLayer
  }
}

const mapDispatchToProps = (dispatch) => {
	return{
		changeLayer: (layer) => {
			dispatch(changeLayer(layer))
		}
	}
}

class AppWrapper extends React.Component{  
  render(){
    switch(this.props.renderLayer){
      case 'MAIN_MENU':
        return <MainMenuContainer />
      case 'CHARACTER_CREATION':
        return <CharacterCreationContainer />
      case 'CHARACTER_LIST':
        return <CharacterListContainer />
      default:
        return null
    }
  }
}

AppWrapper.propTypes = {
  renderLayer: React.PropTypes.string
}
export default connect (mapStateToProps, mapDispatchToProps) (AppWrapper);
