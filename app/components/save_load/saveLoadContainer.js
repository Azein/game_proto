import { connect } from 'react-redux';
import SaveLoad from './SaveLoad.js';

const mapStateToProps = (state) => {
  return {
    status: state.gameData.saveLoadStatus,
    gameCharacter: state.gameCharacter,
    world: state.world
  }
}

const SaveLoadContainer = connect(
  mapStateToProps,
  null
  )(SaveLoad)

export default SaveLoadContainer;