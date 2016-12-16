import { put, select, call} from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';

const getTimeObject = (state) => state.world.time;

const timeCounter = time => ({
  map: f => timeCounter(f(time)),
  fold: f => f(time)
})

function* returnTimeObject() {
  const stateTime = yield select(getTimeObject)
  console.info(stateTime)
  const time = timeCounter(stateTime)
      .map(obj => { 
        console.info(obj)
        obj.ticksPassed = obj.ticksPassed + 1; 
        return obj 
      })
      .map(obj => { 
        console.info(obj)
        obj.daysPassed = Math.floor(obj.ticksPassed / 5 ); 
        return obj 
      })
      .fold(obj => obj)
  yield put ({ type: 'TICK_PASSED', time })
}

function* gameLoop() {
  while(true){
    yield call(delay, 1000)
    yield* returnTimeObject()
  }
}

export function* gameLoopSaga() {
  yield takeEvery('GAME_START', gameLoop )
}