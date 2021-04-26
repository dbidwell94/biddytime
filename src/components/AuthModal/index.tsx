import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleAuthModal } from "@state/authReducer/actions";
import React from "react";
import Input from "@components/FormComponents/Input";
import Button from "@components/Button";
import authClient from "@api/AuthApiClient";

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
  margin: 0;
  padding: 0;
  div.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    min-width: 50%;
    min-height: 50%;
    border-radius: 2rem;
    box-shadow: inset 0rem 0rem 1rem black;
    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .input-item {
        margin: 1rem 0rem;
        font-size: 2rem;
        height: 2.5rem;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
    }
  }
`;

export default function AuthModal() {
  const dispatch = useDispatch();

  function handleExternalClickCapture(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleAuthModal());
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const result = await authClient.login("dbidwell", "Aw3s0m333!!!");
    } catch (err) {
      if (authClient.isApiError(err)) {
        console.error(err.message, err.details);
      }
    }
  }

  return (
    <AuthContainer onClick={handleExternalClickCapture}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={async (e) => await onSubmit(e)}>
          <Input id="usename" name="username" placeholder="Username" className="input-item" />
          <Input id="password" name="password" placeholder="Password" type="password" className="input-item" />
          <Button buttonText="Submit" isLink={false} cta type="submit" />
        </form>
      </div>
    </AuthContainer>
  );
}
