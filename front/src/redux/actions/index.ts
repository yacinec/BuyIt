import ActionType from "../action-types";

interface AuthAction {
  type: ActionType.LOGIN | ActionType.LOGOUT | ActionType.REFRESH;
  payload?: any;
}

interface CartAction {
  type:
    | ActionType.ADD_ARTICLE
    | ActionType.REMOVE_ARTICLE
    | ActionType.UPDATE_ARTICLE;
  payload?: any;
}
export type Action = CartAction | AuthAction;
