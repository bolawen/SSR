import Reducer from './reducer';
import Thunk from "redux-thunk";
import Logger from 'redux-logger';
import { createStore,applyMiddleware } from "redux";

const GetStore = ()=>{
    return createStore(Reducer,applyMiddleware(Thunk,Logger));
}

export default GetStore;