import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga'

const getStatsObject = (state) => state.creationReducer.creationStats;

export function* statPlus(action) {
  const stat = action.stat;
  const statsObject = yield select(getStatsObject)
  if (statsObject.statPoints > 0 && statsObject[stat] < 10) {
    yield put({ type: 'STAT_INCREMENT', stat })
  }
}

export function* statMinus(action) {
  const stat = action.stat;
  const statsObject = yield select(getStatsObject)
  if (statsObject[stat] > 1) {
    yield put({ type: 'STAT_DECREMENT', stat })
  }
}

export function* creationSaga() {
  yield takeEvery('STAT_PLUS', statPlus )
  yield takeEvery('STAT_MINUS', statMinus )
}

/* dfgdfdffggggdsdываd*/