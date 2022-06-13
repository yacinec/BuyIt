import { Action } from "../actions";
import ActionType from "../action-types";

const INITIAL_STATE = {
  uid: window.sessionStorage.getItem("uid")
    ? window.sessionStorage.getItem("uid")
    : "",
  accessToken: window.sessionStorage.getItem("accessToken")
    ? window.sessionStorage.getItem("accessToken")
    : "",
  refreshToken: window.sessionStorage.getItem("refreshToken")
    ? window.sessionStorage.getItem("refreshToken")
    : "",
  expiresIn: window.sessionStorage.getItem("expiresIn")
    ? window.sessionStorage.getItem("expiresIn")
    : 0,
};

const authReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      console.log(action.payload);
      state = {
        ...state,
        ...action.payload,
      };

      window.sessionStorage.setItem("uid", action.payload.uid);
      window.sessionStorage.setItem("accessToken", action.payload.accessToken);
      window.sessionStorage.setItem(
        "refreshToken",
        action.payload.refreshToken
      );
      window.sessionStorage.setItem("expiresIn", action.payload.expiresIn);
      break;
    case ActionType.LOGOUT:
      state = {
        uid: "",
        accessToken: "",
        refreshToken: "",
        expiresIn: 0,
      };
      window.sessionStorage.clear();
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
