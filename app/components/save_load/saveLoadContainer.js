import { connect } from 'react-redux';
import SaveLoad from './SaveLoad.js';
import { loadGame } from '../../engine/game_data/gameDataActions.js';

const mapStateToProps = (state) => {
  return {
    status: state.gameData.saveLoadStatus,
    gameCharacter: state.gameCharacter,
    world: state.world
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadGame: (gameCharacter, world) => {
      dispatch(loadGame(gameCharacter, world))
    }
  }
}

const SaveLoadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(SaveLoad)

export default SaveLoadContainer;