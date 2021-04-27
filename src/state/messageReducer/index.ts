import { IMessageAction, IMessageState, messageActionTypes } from "./types";

const initialState: IMessageState = {
  messages: [],
};

export default function reducer(state = initialState, action: IMessageAction): IMessageState {
  switch (action.type) {
    case messageActionTypes.clearAllMessages:
      return { ...state, messages: [] };

    case messageActionTypes.addSystemMessage:
      return { ...state, messages: [...state.messages, action.payload] };

    case messageActionTypes.removeSystemMessage:
      return { ...state, messages: state.messages.filter((message) => message.key !== action.payload) };

    default:
      return state;
  }
}
