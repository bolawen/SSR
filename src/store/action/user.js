import { ChangeUsername, ChangeToken } from "../type";

export const changeToken = (data) => {
  return {
    type: ChangeToken,
    data,
  };
};
export const changeUsername = (data) => {
  return {
    type: ChangeUsername,
    data,
  };
};
