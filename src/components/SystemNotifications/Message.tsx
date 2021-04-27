import { ISystemMessage, messageSeverity } from "@state/messageReducer/types";
import React from "react";
import styled from "styled-components";

interface IMessageContainerProps {
  severity: messageSeverity;
}

const MessageContainer = styled.div<IMessageContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ severity }) => {
    switch (severity) {
      case messageSeverity.low:
        return "whitesmoke";
      case messageSeverity.medium:
        return "whitesmoke";
      case messageSeverity.critical:
        return "red";
      default:
        return "whitesmoke";
    }
  }};
`;

interface IMessageProps {
  message: ISystemMessage;
  timeout?: number;
}

export default function Message(props: IMessageProps) {
  const { message } = props;

  return (
    <MessageContainer severity={message.severity}>
      <p>{message.message}</p>
    </MessageContainer>
  );
}
