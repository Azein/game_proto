import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga'

const getFreeStats = state => state.creationStats.statPoints;


export function* statPlus(action) {
  const stat = action.stat;
  const freeStats = yield select(getFreeStats)
  if (freeStats > 0) {
    yield put({ type: 'STAT_INCREMENT', stat })
  }
}

export function* statMinus(action) {
  const stat = action.stat;
  const getStatValue = (state) => state.creationStats[stat];
  const statValue = yield select(getStatValue)
  if (statValue > 1) {
    yield put({ type: 'STAT_DECREMENT', stat })
  }
}



export function* creationSaga() {
  yield takeEvery('STAT_PLUS', statPlus )
  yield takeEvery('STAT_MINUS', statMinus )
}