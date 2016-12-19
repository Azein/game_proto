import  { connect } from 'react-redux';
import BottomBar from './bottomBar.js';
import { gamePause, gameContinue } from '../../../engine/game_loop/gameLoopActions.js';
import { displaySaveLoad } from '../../../engine/game_data/gameDataActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    gamePause: () => {
      dispatch(gamePause())
    },
    gameContinue: () => {
      dispatch(gameContinue())
    },
    displaySaveLoad: (status) => {
      dispatch(displaySaveLoad(status))
    }
  }

}

const BottomBarContainer = connect(
  null,
  mapDispatchToProps
  )(BottomBar);

export default BottomBarContainer
