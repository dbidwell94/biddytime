import { IThunkAction } from "..";
import { actionTypes, IAuthAction } from "./types";

export function toggleAuthModal(): IThunkAction<IAuthAction> {
  return function (dispatch, getState) {
    const { authModalOpen } = getState().auth;
    dispatch({ type: actionTypes.setAuthModalOpen, payload: !authModalOpen });
  };
}
