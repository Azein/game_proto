import React from 'react';
import styles from './bottomBar.css';

export default class BottomBar extends React.Component {
  render(){
    return(
      <div className={styles.bottom__bar}>
        <button onClick={() => this.props.gamePause()}>PAUSE</button>
        <button onClick={() => this.props.gameContinue()}>CONTINUE</button>
        <button onClick={() => this.props.displaySaveLoad('save')}>SAVE</button>
        <button onClick={() => this.props.displaySaveLoad('load')}>LOAD</button>
      </div>
    )
  }
}

BottomBar.propTypes = {
  gamePause: React.PropTypes.func,
  gameContinue: React.PropTypes.func,
  displaySaveLoad: React.PropTypes.func
}