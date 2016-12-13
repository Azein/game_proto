import  React from 'react';
import styles from './characterCreation.css';
import {statsObject, originObject} from './creationText.js';
import StatRow from './statRow.js';
import OriginRow from './originRow';
import {nameEntered, originSelected} from './creationRules.js';

export default class CharacterCreation extends React.Component{
  
  saveCharacter = () => {
    if (localStorage.getItem('savedProrabotkaCharacters') === null){
      localStorage.setItem('savedProrabotkaCharacters', '{}' )
      this.saveCharacter()
    } else {
      const savedCharacters = JSON.parse(localStorage.getItem('savedProrabotkaCharacters'));
      savedCharacters[this.props.characterName] = {
        characterName: this.props.characterName,
        statCalc: this.props.stats,
        origin: this.props.origin
      }
      localStorage.setItem('savedProrabotkaCharacters', JSON.stringify(savedCharacters))
    }
  }

  startGame = () => {
    const createdCharacter = {
      characterName: this.props.characterName,
      stats: this.props.stats,
      origin: this.props.origin
    }
    this.props.gameStart(createdCharacter)
  }

  handleChangeName = (e) => {
    if (e.target.value.match(/^[a-zA-Zа-яА-я ]+$/) != null || e.target.value === ''){
      this.props.changeName(e.target.value)
    } else {
      return false
    }
  }

	render(){
    const {
      stats,
      showDescr,
      statPlus,
      statMinus,
      origin,
      changeOrigin,
      changeLayer,
      characterName,
      activeDescr, 
    } = this.props;

    let stat_rows = Object.keys(statsObject).map( (key) => 
      <StatRow 
        stat={stats[key]} 
        key={key}
        name={statsObject[key].name} 
        showDescr={showDescr} 
        statPlus={statPlus}
        statMinus={statMinus}
        nameKey={key} />
    )
    let origin_rows = Object.keys(originObject).map( (key) => 
      <OriginRow 
        key={key}
        name={originObject[key].name}
        originSelected={origin[key]} 
        changeOrigin={changeOrigin}
        nameKey={key} />
    )
    return(
      <div className={styles.container}>
        <div className={styles.box}>
          <i className={`material-icons  ${styles.back__arrow}`}  onClick={() => this.props.changeLayer('MAIN_MENU')}>
            reply
          </i>
          <h2 className={styles.header}>Создание нового проработчика</h2>
          <div className={styles.name__row}>
            <input ref='name__input' placeholder='Введите имя' value={characterName}
              className={styles.name__input}
              onChange={this.handleChangeName}/>
          </div>
          <div className={styles.character__box__horizontal}>
            <div className={styles.horizontal__section__stats}>
              <h2>Характеристики:</h2>
              {stat_rows}
              <div className={styles.stat__row }>
                <span className={styles.stat__row__points}>Очков осталось</span>
                <div className={styles.stat__row__value}>
                  {this.props.stats.statPoints}
                </div>              
              </div>
            </div>
             <div className={styles.horizontal__section__descr}>
               {activeDescr}
            </div>
            <div className={styles.origin__section}>
              <h2>Происхождение</h2>
              {origin_rows}
            </div>
            <div className={styles.final__section}>
              <div className={styles.import__btn}
                onClick={() => changeLayer('CHARACTER_LIST')}>
                Загрузить проработчика
              </div>
              {
                <div className={styles.export__btn} onClick={this.saveCharacter}>Сохранить проработчика</div>
              }
              {
                <div className={styles.start__btn} 
                  onClick={this.startGame}>
                  Начать игру
                </div>
              }
            </div>
          </div>
        </div>
      </div>
		)
	}
}

CharacterCreation.propTypes = {
  showDescr: React.PropTypes.func,
  activeDescr:  React.PropTypes.string,
  changeLayer:  React.PropTypes.func,
  statPlus: React.PropTypes.func,
  statMinus: React.PropTypes.func,
  changeOrigin: React.PropTypes.func,
  gameStart: React.PropTypes.func,
  stats: React.PropTypes.obj,
  changeName: React.PropTypes.func,
  origin: React.PropTypes.obj,
  characterName: React.PropTypes.string
}; 
