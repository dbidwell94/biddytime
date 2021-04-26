import { IThunkAction } from "@state/index";
import { actionTypes, IAuthAction } from "@state/authReducer/types";

export function toggleAuthModal(): IThunkAction<IAuthAction> {
  return function (dispatch, getState) {
    const { authModalOpen } = getState().auth;
    dispatch({ type: actionTypes.setAuthModalOpen, payload: !authModalOpen });
  };
}
