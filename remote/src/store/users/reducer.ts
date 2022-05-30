import { USERS } from './consts';

const defaultState = {
  users: null
}


export default (state = defaultState, action: { type: keyof USERS }) => {
  switch (action.type) {
    case USERS.REGISTER_USER:
      return state;
    case USERS.CHECK_USER:
      return state;
    default:
      return state;
  }
}