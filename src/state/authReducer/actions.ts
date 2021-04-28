import { IThunkAction } from "@state/index";
import { actionTypes, IAuthAction } from "@state/authReducer/types";
import authClient from "@api/AuthApiClient";

export function toggleAuthModal(): IThunkAction<IAuthAction> {
  return function (dispatch, getState) {
    const { authModalOpen } = getState().auth;
    dispatch({ type: actionTypes.setAuthModalOpen, payload: !authModalOpen });
  };
}

export function login(username: string, password: string, callback?: () => void): IThunkAction<IAuthAction> {
  return async function (dispatch, getState) {
    try {
      const response = await authClient.login(username, password);
      dispatch({
        type: actionTypes.setUser,
        payload: response.data.user,
      });
      dispatch({
        type: actionTypes.setToken,
        payload: response.data.token,
      });
      dispatch({
        type: actionTypes.setIsLoggedIn,
        payload: true,
      });
      window.localStorage.setItem("token", response.data.token);
      if (callback) {
        callback();
      }
    } catch (err) {}
  };
}

export function invalidateLogin(): IThunkAction<IAuthAction> {
  return function (dispatch) {
    dispatch({
      type: actionTypes.setUser,
      payload: null,
    });
    dispatch({
      payload: null,
      type: actionTypes.setToken,
    });
    localStorage.removeItem("token");
    dispatch({
      type: actionTypes.setIsLoggedIn,
      payload: false,
    });
  };
}
