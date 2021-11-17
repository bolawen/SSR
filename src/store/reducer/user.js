import { ChangeUsername, ChangeToken } from "../type";

export const UsernameReducer = (state = "", action) => {
  switch (action.type) {
    case ChangeUsername:
      return action.data;
    default:
      return state;
  }
};

export const TokenReducer = (state = "", action) => {
  switch (action.type) {
    case ChangeToken:
      return action.data;
    default:
      return state;
  }
};
