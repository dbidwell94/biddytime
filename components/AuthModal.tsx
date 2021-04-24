import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleAuthModal } from "../state/authReducer/actions";
import React from "react";

const AuthContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  div.modal {
    background: white;
    min-width: 50%;
    min-height: 50%;
    border: 0.25rem solid black;
    border-radius: 2rem;
    box-shadow: inset 0rem 0rem 1rem black;
  }
`;

export default function AuthModal() {
  const dispatch = useDispatch();

  function handleExternalClickCapture(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleAuthModal());
  }

  return (
    <AuthContainer onClick={handleExternalClickCapture}>
      <div className="modal" onClick={(e) => e.stopPropagation()}></div>
    </AuthContainer>
  );
}
