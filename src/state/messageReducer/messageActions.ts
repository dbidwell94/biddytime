import { IMessageAction, ISystemMessage, messageActionTypes, messageSeverity } from "./types";
import { v4 as uuid } from "uuid";

export function addMessage(messageText: string, severity = messageSeverity.low, timeout = 1000): IMessageAction {
  return {
    payload: { key: uuid(), message: messageText, severity, timeout },
    type: messageActionTypes.addSystemMessage,
  };
}

export function removeMessage(message: ISystemMessage | string): IMessageAction {
  if (typeof message === "string") {
    return {
      payload: message,
      type: messageActionTypes.removeSystemMessage,
    };
  }
  return {
    payload: message.key,
    type: messageActionTypes.removeSystemMessage,
  };
}

export function clearAllMessages(): IMessageAction {
  return {
    payload: null,
    type: messageActionTypes.clearAllMessages,
  };
}
