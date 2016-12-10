import React from 'react';
import styles from './originRow.css';

export default class OriginRow extends React.Component {
  render(){
    return(
      <div 
        className={`${styles.origin__row} ${this.props.originSelected ? styles.selected : null}`}
        onClick={() => this.props.changeOrigin(this.props.nameKey)}>
        {this.props.name}
      </div>
    )
  }
}

OriginRow.propTypes = {
  name: React.PropTypes.string,
  nameKey: React.PropTypes.string,
  changeOrigin: React.PropTypes.func,
  originSelected: React.PropTypes.bool
}