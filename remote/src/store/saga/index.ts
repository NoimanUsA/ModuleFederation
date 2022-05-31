import { addTaskSaga } from "./tasks";

export default function* rootSaga() {
  yield addTaskSaga();
}