import { combineReducers } from "redux";
import { UsernameReducer, TokenReducer } from "./user";
import { ImageListReducer } from "./image";

export default combineReducers({
    token:TokenReducer,
    username:UsernameReducer,
    imageList:ImageListReducer
});