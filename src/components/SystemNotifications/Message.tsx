import { removeMessage } from "@state/messageReducer/messageActions";
import { ISystemMessage, messageSeverity } from "@state/messageReducer/types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

const messageExitTimeMs = 250;

interface IMessageContainerProps {
  severity: messageSeverity;
}

const enter = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`;

const exit = keyframes`
  0% {
    opacity: 1;
    transform: translate(0%, 0%);
    filter: blur(0rem);
  }
  75% {
    filter: blur(.25rem);
    opacity: 0;
  }
  100% {
    transform: translate(50%, 0%);
    opacity: 0;
  }
`;

const MessageContainer = styled.div<IMessageContainerProps>`
  animation: ${enter} 0.125s ease-in-out 1 forwards;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0rem 0rem 0.25rem 0rem black;
  border-radius: 1rem;
  text-align: center;
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
  background: whitesmoke;
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-height: 100%;
    max-width: 95%;
  }
  &.exit {
    animation: ${exit} ${messageExitTimeMs / 1000}s ease-in-out 1 forwards;
  }
`;

interface IMessageProps {
  message: ISystemMessage;
  timeout?: number;
}

export default function Message(props: IMessageProps) {
  const { message } = props;

  const dispatch = useDispatch();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        dispatch(removeMessage(message));
      }, messageExitTimeMs);
    }, message.timeout);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    if (isExiting) {
    }
  }, [isExiting]);

  return (
    <MessageContainer severity={message.severity} className={`${isExiting ? "exit" : ""}`}>
      <p>{message.message}</p>
    </MessageContainer>
  );
}
