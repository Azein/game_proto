import React from 'react';
import styles from './mainMenu.css';
import { getSavedGames } from '../../engine/game_data/dataWorkers.js';

export default class MainMenu extends React.Component{
  
  handleExit = () =>{
    window.close();
  };

	render(){
		return(  
      <div className={styles.container}>
        <div className={styles.box}>
          <h3 className={styles.header}>Prorabotka The Game</h3>
          
          <div className={`${styles.item} ${styles.active}`} onClick={() => this.props.changeLayer('CHARACTER_CREATION')}>
            Начать прорабатывать
          </div>
          {getSavedGames() != null  
            ? <div className={`${styles.item} ${styles.active}`}
                onClick={() => this.props.displaySaveLoad('load')}>
                Продолжить проработку
              </div>
            : <div className={`${styles.item} ${styles.inactive}`}>Продолжить проработку</div>
          }
          <div onClick={this.handleExit} className={`${styles.item} ${styles.active}`}>Выход</div>
        </div>
      </div>
		)
	}
}


MainMenu.propTypes = {
  changeLayer: React.PropTypes.func,
  displaySaveLoad: React.PropTypes.func
};
