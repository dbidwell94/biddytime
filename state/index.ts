import thunk, { ThunkAction } from "redux-thunk";
import logger from "redux-logger";

import authReducer from "./authReducer";

import { Action, applyMiddleware, combineReducers, createStore } from "redux";

const globalState = combineReducers({ auth: authReducer });

export type IGlobalState = ReturnType<typeof globalState>;

export type IThunkAction<T extends Action> = ThunkAction<void, IGlobalState, null, T>;

export default createStore(globalState, applyMiddleware(thunk, logger));
