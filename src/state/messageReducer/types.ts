import { Action } from "redux";

export enum messageSeverity {
  low = "low",
  medium = "medium",
  high = "high",
  critical = "critical",
}

export interface ISystemMessage {
  message: string;
  key: string;
  severity: messageSeverity;
  timeout: number;
}

export interface IMessageState {
  messages: ISystemMessage[];
}

export enum messageActionTypes {
  addSystemMessage = "addSystemMessage",
  removeSystemMessage = "removeSystemMessage",
  clearAllMessages = "clearAllMessages",
}

interface IAddMessageAction extends Action {
  type: messageActionTypes.addSystemMessage;
  payload: ISystemMessage;
}

interface IRemoveMessageAction extends Action {
  type: messageActionTypes.removeSystemMessage;

  /**
   * This payload is the key for the ISystemMessage
   */
  payload: string;
}

interface IClearMessagesAction extends Action {
  type: messageActionTypes.clearAllMessages;
  payload: null;
}

export type IMessageAction = IAddMessageAction | IRemoveMessageAction | IClearMessagesAction;
