import React from 'react';
import styles from './saveLoad.css';

export default class SaveLoad extends React.Component {
  render(){
    return(
      <div className={styles.container}>
        <div className={styles.box}>
        { this.props.status === 'save' &&
          <div className={styles.new__save}>
          </div>
        }
        </div>
      </div>
    )
  }
}