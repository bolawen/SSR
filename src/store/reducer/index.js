import { combineReducers } from "redux";
import { ImageListReducer } from "./image";
import { UserReducer } from "./user";

export default combineReducers({
  user: UserReducer,
  imageList: ImageListReducer,
});
