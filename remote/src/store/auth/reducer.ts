import { AUTH } from './const'

const initialState = {
  userId: 1,
  isAuth: true
};

export default (state = initialState, action: { type: keyof AUTH }) => {
  switch (action.type) {
    case AUTH.ENTER:
      return state;
    case AUTH.EXIT:
      return state;
    default:
      return state;
  }
}

