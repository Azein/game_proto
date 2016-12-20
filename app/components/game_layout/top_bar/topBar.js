import React from 'react';
import styles from './topBar.css';

export default class TopBar extends React.Component {
  render(){
    return(
    <div className={styles.top__bar}>
      
      <div className={styles.character__bar}>
        Проработчик: {this.props.characterName}
      </div>
      
      <div className={styles.time__stats}>
        <div>Проработал:</div>
        <div>{this.props.timeObject.daysPassed} days ( {this.props.timeObject.weeksPassed} weeks {this.props.timeObject.monthsPassed} months )</div>
      </div>
    </div>
    )
  }
}

TopBar.propTypes = {
  timeObject: React.PropTypes.object,
  characterName: React.PropTypes.string
}