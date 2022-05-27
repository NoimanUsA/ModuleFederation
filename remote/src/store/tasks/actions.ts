import { TASKS } from "./consts"

export const addTask = (payload) => ({ type: TASKS.ADD_TASK, payload });
export const deleteTask = (payload) => ({ type: TASKS.DELETE_TASK, payload })
export const completeTask = (payload) => ({ type: TASKS.COMPLETE_TASK, payload });
export const returnTask = (payload) => ({ type: TASKS.RETURN_TASK, payload })