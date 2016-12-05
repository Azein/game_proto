import  React from 'react';
import styles from './characterCreation.css';
import {statsObject} from './creationText.js';
import StatRow from './statRow.js';

export default class CharacterCreation extends React.Component{

	render(){
		console.info(statsObject)
    let stat_rows = Object.keys(statsObject).map( (key) => 
      <StatRow key={key} name={statsObject[key].name} showDescr={this.props.showDescr} nameKey={key} />
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
              {stat_rows}

              <div className={styles.stat__row }>
                <span className={styles.stat__row__points}>Очков осталось</span>
                <div className={styles.stat__row__value}>
                  5
                </div>              
              </div>
            </div>
             <div className={styles.horizontal__section__descr}>
               {this.props.activeDescr}
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
