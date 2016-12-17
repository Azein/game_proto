import { put, select, call} from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';

const getTimeObject = (state) => state.world.time;
const getLoopState = (state) => state.gameLoop.worldProcess;

const timeCounter = time => ({
  map: f => timeCounter(f(time)),
  fold: f => f(time)
})

function* returnTimeObject() {
  const stateTime = yield select(getTimeObject)
 // console.info(stateTime)
  const time = timeCounter(stateTime)
      .map(obj => { 
        obj.ticksPassed = obj.ticksPassed + 1; 
        return obj 
      })
      .map(obj => { 
        obj.daysPassed = Math.floor(obj.ticksPassed / 50 );
        return obj 
      })
      .map(obj => { 
        obj.weeksPassed = Math.floor(obj.daysPassed / 7 ); 
        return obj 
      })
      .map(obj => { 
        obj.monthsPassed = Math.floor(obj.weeksPassed / 4 );
       // console.info(obj) 
        return obj 
      })
      .fold(obj => obj)
  const pauseCheck = yield select(getLoopState)
  if (pauseCheck) { yield put ({ type: 'TICK_PASSED', time }) }
}

function* gameLoop() {
  let loop = yield select(getLoopState)
  while(loop){
    loop = yield select(getLoopState)
    console.info(loop)
    if (!loop) break;
    yield call(delay, 1000)
    yield* returnTimeObject()
  }
}

export function* gameLoopSaga() {
  yield takeEvery('GAME_START', gameLoop )
  yield takeEvery('GAME_CONTINUE', gameLoop )
}