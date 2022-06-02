import tasksSaga from "./tasks";

export default function* rootSaga() {
  yield tasksSaga();
}