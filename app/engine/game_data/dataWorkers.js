
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

export const saveGame = (fileName, gameCharacter, world, overwrite) => {
  
  if(localStorage.getItem('savedProrabotkaGames') === null){
    localStorage.setItem('savedProrabotkaGames', '{}' )
    saveGame(fileName, gameCharacter, world)
  } else {
    return new Promise ((resolve, reject) => {
      const savedProrabotkaGames = JSON.parse(localStorage.getItem('savedProrabotkaGames'));
      if (Object.keys(savedProrabotkaGames).some(key => key === fileName) && !overwrite ){
        reject('Overwrite rights needed')
      } 
      savedProrabotkaGames[fileName] = {
        gameCharacter: gameCharacter,
        world: world
      }
      localStorage.setItem('savedProrabotkaGames', JSON.stringify(savedProrabotkaGames)) 
      resolve('Game saved')     
    })
  } 
}

export const getSavedGames = () => {
  const savedGames = JSON.parse(localStorage.getItem('savedProrabotkaGames'))
  return savedGames
}

