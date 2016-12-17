import  { connect } from 'react-redux';
import BottomBar from './bottomBar.js';
import { gamePause, gameContinue } from '../../../engine/game_loop/gameLoopActions.js';

/*const mapStateToProps = (state) => {

} */

const mapDispatchToProps = (dispatch) => {
  return {
    gamePause: () => {
      dispatch(gamePause())
    },
    gameContinue: () => {
      dispatch(gameContinue())
    }
  }

}

const BottomBarContainer = connect(
  null,
  mapDispatchToProps
  )(BottomBar);

export default BottomBarContainer
