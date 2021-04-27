import thunk, { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import authReducer from "@state/authReducer";
import messageReducer from "@state/messageReducer";
import { Action, applyMiddleware, combineReducers, createStore, Middleware } from "redux";

const globalState = combineReducers({ auth: authReducer, systemMessages: messageReducer });

export type IGlobalState = ReturnType<typeof globalState>;

export type IThunkAction<T extends Action> = ThunkAction<void, IGlobalState, null, T>;

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const store = createStore(globalState, applyMiddleware(...middlewares));

export default store;
