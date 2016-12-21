
export const saveCharacter = (name, stats, origin) => {
  if(localStorage.getItem('savedProrabotkaCharacters') === null){
    localStorage.setItem('savedProrabotkaCharacters', '{}' )
    saveCharacter(name, stats, origin)
  } else {
    const savedCharacters = JSON.parse(localStorage.getItem('savedProrabotkaCharacters'));
    savedCharacters[name] = {
      characterName: name,
      statCalc: stats,
      origin: origin
    }
    localStorage.setItem('savedProrabotkaCharacters', JSON.stringify(savedCharacters))
    }
  }

export const saveGame = (fileName, gameCharacter, world) => {
  if(localStorage.getItem('savedProrabotkaGames') === null){
    localStorage.setItem('savedProrabotkaGames', '{}' )
    saveCharacter(fileName, gameCharacter, world)
  } else {
    const savedProrabotkaGames = JSON.parse(localStorage.getItem('savedProrabotkaGames'));
    savedProrabotkaGames[fileName] = {
      gameCharacter: gameCharacter,
      world: world
    }
    localStorage.setItem('savedProrabotkaGames', JSON.stringify(savedProrabotkaGames))
  } 
}