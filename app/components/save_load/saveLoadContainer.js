import { connect } from 'react-redux';
import SaveLoad from './SaveLoad.js';

const mapStateToProps = (state) => {
  return {
    status: state.gameData.saveLoadStatus
  }
}

const SaveLoadContainer = connect(
  mapStateToProps,
  null
  )(SaveLoad)

export default SaveLoadContainer;