import { Action } from "redux";
import { IUser } from "../types";

export enum actionTypes {
  setUser = "setUser",
  setAuthModalOpen = "setAuthModalOpen",
}

interface IAuthModalAction extends Action {
  type: actionTypes.setAuthModalOpen;
  payload: boolean;
}

interface ISetUserAction extends Action {
  type: actionTypes.setUser;
  payload: IUser;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  isLoggedIn: boolean;
  authModalOpen: boolean;
}

export type IAuthAction = IAuthModalAction | ISetUserAction;
