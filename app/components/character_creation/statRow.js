import React from 'react';
import styles from './statRow.css';

export default class StatRow extends React.Component {
  render(){
    return(
      <div className={styles.stat__row}>
        <span className={styles.stat__row__stat} onClick={() => this.props.showDescr(this.props.nameKey)}>{this.props.name}</span>
        <div className={styles.stat__row__value}>
          <span className={styles.stat__number}>{this.props.stat}</span>
          <i className={`material-icons ${styles.icon__minus}`}
            onClick={(e) => {e.preventDefault(); this.props.statMinus(this.props.nameKey)} }>
            remove_circle_outline
          </i>
         <i className={`material-icons ${styles.icon__plus}`}
            onClick={(e) => {e.preventDefault(); this.props.statPlus(this.props.nameKey)} }>
            add_circle_outline
          </i>
        </div>
      </div>
    )
  }
}