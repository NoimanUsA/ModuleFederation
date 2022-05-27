import { USERS } from './consts';

const defaultState = {
  users: null
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case USERS.REGISTER_USER:
      return state;
    case USERS.CHECK_USER:
      return state;
    default:
      return state;
  }
}