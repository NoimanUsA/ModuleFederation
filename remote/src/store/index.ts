import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import tasks from './tasks/reducer';
import users from './users/reducer';
import auth from './auth/reducer';

export const reducers = combineReducers({
  auth,
  tasks,
  users
})

export const store = createStore(reducers, composeWithDevTools());