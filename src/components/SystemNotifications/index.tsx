import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import Message from "./Message";

const enter = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -90%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0%);
  }
`;

const MessagesContainer = styled.div`
  position: fixed;
  display: flex;
  visibility: hidden;
  top: 90%;
  left: 50%;
  width: 50%;
  height: 5rem;
  background: whitesmoke;
  box-shadow: inset 0rem 0rem 0.25rem 0rem black;
  z-index: 1;
  border-radius: 0.5rem;
  transform: translate(-50%, 0%);

  &.active {
    visibility: visible;
    animation: ${enter} 0.125s ease-in-out forwards;
  }
`;

export default function SystemNotifications() {
  const { messages } = useSelector((state) => state.systemMessages);

  return (
    <MessagesContainer className={messages.length > 0 ? "active" : ""}>
      {messages.length > 0 && <Message message={messages[0]} />}
    </MessagesContainer>
  );
}
