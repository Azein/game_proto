import React from 'react';
import styles from './saveLoad.css';
import { saveGame } from '../../engine/game_data/dataWorkers.js';

export default class SaveLoad extends React.Component {
  constructor(){
    super()
    this.state = {
      saveName: ''
    }
  }
  
  handleSave = () => {
    saveGame(this.state.saveName, this.props.gameCharacter, this.props.world)
  }

  handleSaveName = (e) => {
    this.setState({
      saveName: e.target.value
    })
  }

  render(){
    return(
      <div className={styles.container}>
        <div className={styles.box}>
        { this.props.status === 'save' &&
          <div className={styles.new__save}>
            <input className={styles.save__input} placeholder='Имя файла' 
              value={this.state.saveName} 
              onChange={this.handleSaveName}/>
            { this.state.saveName.length > 0
              ? <div className='app__btn__teal' onClick={this.handleSave}>Сохранить игру</div>
              : <div className='app__btn__teal app__disabled'>Сохранить игру</div>
            }
          </div>
        }
        </div>
      </div>
    )
  }
}