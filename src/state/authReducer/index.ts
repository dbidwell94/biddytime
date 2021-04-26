import { IAuthAction, IAuthState, actionTypes } from "@state/authReducer/types";

const initialState: IAuthState = {
  authModalOpen: false,
  isLoggedIn: false,
  token: null,
  user: null,
};

export default function authReducer(state = initialState, action: IAuthAction): IAuthState {
  switch (action.type) {
    case actionTypes.setUser:
      return { ...state, user: action.payload };

    case actionTypes.setAuthModalOpen:
      return { ...state, authModalOpen: action.payload };

    default:
      return state;
  }
}
