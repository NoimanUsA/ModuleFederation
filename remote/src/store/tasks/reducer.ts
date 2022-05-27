import { TASKS } from './consts';

const defaultState = {
  activeTasks: {
    1: [
      {
        text: "Do something",
        id: 1
      },
      {
        text: "Do something",
        id: 2
      },
      {
        text: "Do something",
        id: 3
      },
    ]
  },
  completedTasks: {
    1: [
      {
        text: "Do something",
        id: 1
      },
      {
        text: "Do something",
        id: 2
      },
      {
        text: "Do something",
        id: 3
      },
    ]
  }
}



export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case TASKS.ADD_TASK:
      const newTask = {
        text: payload.text,
        id: payload.id
      };

      const activeTasks = {
        ...state.activeTasks,
        [payload.userId]: [...state.activeTasks[payload.userId], newTask]
      }

      console.log(activeTasks);
      return { ...state, activeTasks };
    case TASKS.DELETE_TASK:
      return state;
    case TASKS.COMPLETE_TASK:
      return state;
    case TASKS.RETURN_TASK:
      return state;
    default:
      return state;
  }
}