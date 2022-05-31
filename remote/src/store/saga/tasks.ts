import { TASKS } from "../types/tasks";
import { takeEvery, select, put, call } from 'redux-saga/effects';

const getTasks = (userId = 1) => {
  const tasks = window.localStorage.getItem('tasks');
  if (!tasks) {
    return {};
  }
  return JSON.parse(tasks);
}

const setTasks = (userId = 1) => {

}

export function* tasksSaga() {
  // const tasks = yield getAllTasks()
}

export function* addTaskSaga() {
  yield takeEvery(TASKS.ADD_TASK, tasksSaga);
}