const nameEntered = (name) => {
  return name.length > 0
    ?  true
    :  false
}

const originSelected = (origin) => {
  return Object.keys(origin).some(key => origin[key]) 
}

const statsUsed = (stats) => {
  return stats === 0
    ? true
    : false
}

export const testUserInput = (name, origin, stats) => {
  const tests = [
    nameEntered(name),
    originSelected(origin),
    statsUsed(stats)
  ]
  return !tests.some(test => test === false )
}