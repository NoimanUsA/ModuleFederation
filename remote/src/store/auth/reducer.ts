import { AUTH } from './const'

interface IDefaultState {
  userId: null | number;
}

const defaultState: IDefaultState = {
  userId: 1
}



export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH.ENTER:
      return state;
    case AUTH.EXIT:
      return state;
    default:
      return state;
  }
}

