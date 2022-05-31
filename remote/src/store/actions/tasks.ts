import { ITaskPayload, TASKS } from "../types/tasks"


const addTask = (payload: ITaskPayload) => ({ type: TASKS.ADD_TASK, payload });
const deleteTask = (payload: ITaskPayload) => ({ type: TASKS.DELETE_TASK, payload })
const completeTask = (payload: ITaskPayload) => ({ type: TASKS.COMPLETE_TASK, payload });


export default {
  add: addTask,
  delete: deleteTask,
  complete: completeTask
}