import Reducer from "./reducer";
import Thunk from "redux-thunk";
import Logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

export const GetServerStore = (ctx) => {
  return createStore(Reducer, applyMiddleware(Thunk.withExtraArgument(ctx), Logger));
};

export const GetClientStore = () => {
  const defaultState = window.context.state;
  return createStore(Reducer, defaultState, applyMiddleware(Thunk, Logger));
};
