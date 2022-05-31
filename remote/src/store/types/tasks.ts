export enum TASKS {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export interface ITaskPayload {
  id: number;
  text?: string;
}

export interface IAction {
  type: keyof TASKS;
  payload: ITaskPayload
}