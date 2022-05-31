import { TASKS, IAction } from '../types/tasks';
import { ITask } from '@/types/components';

const initialState: {
  activeTasks: ITask[];
  completedTasks: ITask[];
} = {
  activeTasks: [],
  completedTasks: [],
}

export default (state = initialState, { payload, type }: IAction) => {
  switch (type) {
    case TASKS.ADD_TASK:
      const newTask = {
        text: payload.text,
        id: payload.id
      };

      return {
        ...state,
        activeTasks: [
          ...state.activeTasks,
          newTask
        ]
      };
    case TASKS.DELETE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter((task: ITask) => task.id !== payload.id)
      };
    case TASKS.COMPLETE_TASK:
      const completedTask = state.activeTasks.find((task: ITask) => task.id === payload.id);
      const newCompletedTasks = [...state.completedTasks, completedTask]
      const filteredActiveTasks = state.activeTasks.filter((task: ITask) => task.id !== payload.id);
      return {
        activeTasks: filteredActiveTasks,
        completedTasks: newCompletedTasks
      };
    default:
      return state;
  }
}