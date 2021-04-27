import { IAuthAction, IAuthState, actionTypes } from "@state/authReducer/types";
import { IUser } from "@state/types";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");

const initialState: IAuthState = {
  authModalOpen: false,
  isLoggedIn: Boolean(token),
  token,
  user: token ? jwtDecode<IUser>(token) : null,
};

export default function authReducer(state = initialState, action: IAuthAction): IAuthState {
  switch (action.type) {
    case actionTypes.setUser:
      return { ...state, user: action.payload };

    case actionTypes.setAuthModalOpen:
      return { ...state, authModalOpen: action.payload };

    case actionTypes.setToken:
      return { ...state, token: action.payload };

    case actionTypes.setIsLoggedIn:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
}
