import React from 'react'
import styles from './characterList.css';


export default class CharacterList extends React.Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }
  
  componentDidMount(){
    const savedCharacters = JSON.parse(localStorage.getItem('savedProrabotkaCharacters'));
    const characters_array= Object.keys(savedCharacters).map( (objectKey) => savedCharacters[objectKey] )
    this.setState({ characters: characters_array})
  }
  
  handleLoadCharacter = (character) => {
    console.log('xd')
    this.props.loadCharacter(character)
  }

  render(){
    const character_cards = this.state.characters.map( (card, i) => 
      <div key={i} className={styles.character__card} onClick={() => this.props.loadCharacter(card)}>{card.characterName}</div>
    )
    
    return(
      <div className={styles.container}>
        <i className={`material-icons  ${styles.back__arrow}`}  onClick={() => this.props.changeLayer('CHARACTER_CREATION')}>
          reply
        </i>
        {character_cards}
      </div>
    )
  }
}

CharacterList.propTypes = {
  changeLayer: React.PropTypes.func,
  loadCharacter: React.PropTypes.func
}


