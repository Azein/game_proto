import { creationSaga } from './components/character_creation/creationSaga.js';
import { gameLoopSaga } from './engine/game_loop/gameLoopSaga.js';
export default function* rootSaga() {
  yield [
    creationSaga(),
    gameLoopSaga()
  ]
}