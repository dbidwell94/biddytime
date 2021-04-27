import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import Message from "./Message";

const MessagesContainer = styled.div`
  position: fixed;
  display: flex;
  visibility: hidden;
  top: 90%;
  left: 50%;
  width: 50%;
  height: 5rem;
  background: transparent;
  z-index: 1;
  border-radius: 0.5rem;
  transform: translate(-50%, 0%);
  &.active {
    visibility: visible;
  }
`;

export default function SystemNotifications() {
  const { messages } = useSelector((state) => state.systemMessages);

  return (
    <>
      {messages.length > 0 && (
        <MessagesContainer className={messages.length > 0 ? "active" : ""}>
          <Message message={messages[0]} key={`message-uuid-${messages[0].key}`} />
        </MessagesContainer>
      )}
    </>
  );
}
