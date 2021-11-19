import { ChangeUser } from "../type";

export const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ChangeUser:
      return action.data;
    default:
      return state;
  }
};
