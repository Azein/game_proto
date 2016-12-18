import  { connect } from 'react-redux';
import TopBar from './topBar.js';

const mapStateToProps = (state) => {
  return {
    characterName: state.gameCharacter.initialStats.characterName,
    timeObject: state.world.time
  }
}

const TopBarContainer = connect(
  mapStateToProps,
  null
)(TopBar);

export default TopBarContainer;