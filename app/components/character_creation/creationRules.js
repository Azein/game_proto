export const nameEntered = (name) => {
  name.length > 0
    ?  true
    :  false
}

export const originSelected = (origin) => {
  let selected = false;
  Object.keys(origin).map( (key) => {
    if(origin[key]){
      selected = true;
    }
  })
  return selected
}