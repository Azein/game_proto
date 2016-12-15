import { put, select, call} from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';

export function* gameLoop() {
  while(true){
     yield call(delay, 1000)
     yield (console.log('it runs'))
  }
}

export function* gameLoopSaga() {
  yield takeEvery('GAME_START', gameLoop )
}