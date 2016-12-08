import  React from 'react';
import styles from './characterCreation.css';
import {statsObject, originObject} from './creationText.js';
import StatRow from './statRow.js';
import OriginRow from './originRow';

export default class CharacterCreation extends React.Component{
  
	render(){
		console.info(statsObject)
    let stat_rows = Object.keys(statsObject).map( (key) => 
      <StatRow 
        stat={this.props.stats[key]} 
        key={key}
        name={statsObject[key].name} 
        showDescr={this.props.showDescr} 
        statPlus={this.props.statPlus}
        statMinus={this.props.statMinus}
        nameKey={key} />
    )
    let origin_rows = Object.keys(originObject).map( (key) => 
      <OriginRow 
        key={key}
        name={originObject[key].name}
        originSelected={this.props.origin[key]} 
        changeOrigin={this.props.changeOrigin}
        nameKey={key} />
    )
    return(
      <div className={styles.container}>
        <div className={styles.box}>
          <i className={'material-icons '+styles.back__arrow}  onClick={() => this.props.changeLayer('MAIN_MENU')}>
            reply
          </i>
          <h2 className={styles.header}>Создание нового проработчика</h2>
          <div className={styles.name__row}>
            <input placeholder='Введите имя' className={styles.name__input}/>
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
               {this.props.activeDescr}
            </div>
            <div className={styles.origin__section}>
              <h2>Происхождение</h2>
              {origin_rows}
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
  changeLayer:  React.PropTypes.func
}; 
