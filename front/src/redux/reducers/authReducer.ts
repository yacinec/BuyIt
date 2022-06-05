import { Action } from "../actions";
import ActionType from "../action-types";

const INITIAL_STATE = {
  uid: "",
  accessToken: "",
  refreshToken: "",
  expiresIn: "",
};

const authReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      state = {
        ...state,
        ...action.payload,
      };
      sessionStorage.set("accessToken", action.payload.accessToken);
      sessionStorage.set("refreshToken", action.payload.refreshToken);
      sessionStorage.set("expiresIn", action.payload.expiresIn);
      break;
    case ActionType.LOGOUT:
      state = {
        uid: "",
        accessToken: "",
        refreshToken: "",
        expiresIn: "",
      };
      sessionStorage.clear();
      break;
    case ActionType.REFRESH:
      state = {
        ...state,
        ...action.payload,
      };
      break;
  }

  return state;
};

export default authReducer;
