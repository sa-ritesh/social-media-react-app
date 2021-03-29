import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";
const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: true,
        error: null,
        user: action.user,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
