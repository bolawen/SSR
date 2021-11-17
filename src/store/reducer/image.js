import { ChangeImageList } from "../type";

export const ImageListReducer = (state = [], action) => {
  switch (action.type) {
    case ChangeImageList:
      return action.data;
    default:
      return state;
  }
};
