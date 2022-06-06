import { Action } from "../actions";
import ActionType from "../action-types";
import { Article, Brand } from "../../types";

const INITIAL_STATE = {
  articles: Array<Article>(),
};

const articleReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_ARTICLES:
      state = {
        ...state,
        articles: [...action.payload],
      };
      break;
  }
  return state;
};

export default articleReducer;
