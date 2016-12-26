import React from 'react';
import styles from './saveLoad.css';
import { saveGame, getSavedGames } from '../../engine/game_data/dataWorkers.js';

class ConfirmOverwrite extends React.Component {
  render(){
    return(
      <div className='app__dark__overlay'>
        <div className={styles.overlay__box}>
          <div className={styles.overlay__box__text}>
            Перезаписать выбранный файл?
          </div>
          <div className={styles.overlay__box__buttons}>
            <div className='app__btn__blue' onClick={() => this.props.hide()}>Нет</div>
            <div className='app__btn__teal' 
              onClick={() => {this.props.handleSave(this.propskey); this.props.hide() }}>
              Да
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class SaveLoad extends React.Component {
  constructor(){
    super()
    this.state = {
      saveName: '',
      savedGames: {},
      confirmOverwrite: false,
      overwriteKey: ''
    }
  }
  
  componentWillMount(){
    this.setState({savedGames: getSavedGames()})
  }
  
  hideConfirm = () => {
    this.setState({confirmOverwrite: false, overwriteKey: ''})
  }

  handleSave = (saveName) => {
    saveGame(saveName, this.props.gameCharacter, this.props.world)
  }

  handleOverwrite = (saveName) => {
    this.setState({confirmOverwrite: true, overwriteKey: saveName})
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
        {this.props.status === 'save' &&
          <div className='app__btn__teal' onClick={() => this.handleOverwrite(key)}>Сохранить игру</div> 
        }
        <div className='app__btn__blue'
          onClick={() => this.props.loadGame(this.state.savedGames[key].gameCharacter, this.state.savedGames[key].world)}>
          Загрузить игру
        </div>
      </div>
    )
    return(
      <div className={styles.container}>
        {this.state.confirmOverwrite &&
          <ConfirmOverwrite hide={this.hideConfirm} handleSave={this.handleSave} key={this.state.overwriteKey} />
        }
        <div className={styles.box}>
        { this.props.status === 'save' &&
          <div className={styles.new__save}>
            <input className={styles.save__input} placeholder='Имя файла' 
              value={this.state.saveName} 
              onChange={this.handleSaveName}/>
            { this.state.saveName.length > 0
              ? <div className='app__btn__teal' onClick={() => this.handleSave(this.state.saveName)}>Сохранить игру</div>
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