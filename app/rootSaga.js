import { creationSaga } from './components/character_creation/creationSaga.js';
export default function* rootSaga() {
  yield [
    creationSaga()
  ]
}