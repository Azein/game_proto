import * as types from './actionTypes.js';


export const showDescr = (descr) => {
  return {type: types.CREATION_SHOW_DESCR, descr}
}

export const statPlus = (stat) => {
  return {type: types.STAT_PLUS, stat}
}

export const statMinus = (stat) => {
  return {type: types.STAT_MINUS, stat}
}

export const changeOrigin = (origin) => {
  return {type: types.CHANGE_ORIGIN, origin}
}

export const changeName = (name) => {
  return {type: types.CHANGE_NAME, name}
}
export const loadCharacter = (character) => {
  return {type: types.LOAD_CHARACTER, character}
}