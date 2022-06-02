import { combineReducers } from 'redux';

// Reducers
import tasks from './tasks';

const rootReducer = combineReducers({
  tasks
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
