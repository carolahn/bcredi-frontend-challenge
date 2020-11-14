import { SAVE_USER_INFO } from "../actions/user";

const defaultState = {
  user: {},
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SAVE_USER_INFO:
      const { user } = payload;
      return { ...state, user: { ...user } };
    default:
      return state;
  }
};

export default reducer;
