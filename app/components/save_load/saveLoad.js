import React from 'react';
import styles from './saveLoad.css';
import { saveGame, getSavedGames } from '../../engine/game_data/dataWorkers.js';

export default class SaveLoad extends React.Component {
  constructor(){
    super()
    this.state = {
      saveName: '',
      savedGames: {}
    }
  }
  
  componentWillMount(){
    this.setState({savedGames: getSavedGames()})
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
    const savedGames = Object.keys(this.state.savedGames).map((key) => 
      <div key={key} className={styles.new__save}>
        <div className={styles.game__name}>{key}</div>
        <div className='app__btn__blue'
          onClick={() => this.props.loadGame(this.state.savedGames[key].gameCharacter, this.state.savedGames[key].world)}>
          Загрузить игру
        </div>
      </div>
    )
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
        {savedGames}
        </div>
      </div>
    )
  }
}

SaveLoad.propTypes = {
  gameCharacter: React.PropTypes.object,
  world: React.PropTypes.object,
  status: React.PropTypes.string,
  loadGame: React.PropTypes.func
}