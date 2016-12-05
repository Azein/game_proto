import React from 'react';
import styles from './statRow.css';

export default class StatRow extends React.Component {
  render(){
    return(
      <div className={styles.stat__row} onClick={() => this.props.showDescr(this.props.nameKey)}>
        <span className={styles.stat__row__stat}>{this.props.name}</span>
        <div className={styles.stat__row__value}>
          5
        </div>
      </div>
    )
  }
}