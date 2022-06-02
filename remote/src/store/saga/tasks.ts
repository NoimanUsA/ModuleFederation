import { TASKS, TasksState } from "../types/tasks";
import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import taskActions from '@/store/actions/tasks';
import { useDispatch } from "react-redux";

const getTasks = (): TasksState => {
  const tasks = window.localStorage.getItem('tasks');
  if (!tasks) {
    return {
      activeTasks: [],
      completedTasks: []
    };
  }
  return JSON.parse(tasks);
}

const setTasks = (tasks: TasksState) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function* tasksWorker() {
  const allTasks: TasksState = yield select((state) => state.tasks);
  yield fork(setTasks, allTasks);
}

function* setTasksWorker() {
  const tasks: TasksState = yield call(getTasks);
  yield put(taskActions.setTasks(tasks));
}

export default function* () {
  yield takeEvery(TASKS.FETCH_TASKS, setTasksWorker);
  yield takeEvery(TASKS.ADD_TASK, tasksWorker);
  yield takeEvery(TASKS.COMPLETE_TASK, tasksWorker);
  yield takeEvery(TASKS.DELETE_TASK, tasksWorker);

}