import { Action } from "redux";
import { IUser } from "../types";

export enum actionTypes {
  setUser = "setUser",
  setAuthModalOpen = "setAuthModalOpen",
  setToken = "setToken",
  setIsLoggedIn = "setIsLoggedIn",
}

interface IAuthModalAction extends Action {
  type: actionTypes.setAuthModalOpen;
  payload: boolean;
}

interface ISetUserAction extends Action {
  type: actionTypes.setUser;
  payload: IUser | null;
}

interface ISetTokenAction extends Action {
  type: actionTypes.setToken;
  payload: string | null;
}

interface ISetIsLoggedInAction extends Action {
  type: actionTypes.setIsLoggedIn;
  payload: boolean;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  isLoggedIn: boolean;
  authModalOpen: boolean;
}

export type IAuthAction = IAuthModalAction | ISetUserAction | ISetTokenAction | ISetIsLoggedInAction;
