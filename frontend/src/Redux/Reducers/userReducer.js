import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT } from "../Types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { loading: true };
      case LOGIN_SUCCESS:
        return { laoding: false, users: action.payload };
      case LOGIN_FAIL:
        return { loading: false, message: action.payload };
      case LOUGOUT:
        return {};
      default:
        return state;
    }
  };