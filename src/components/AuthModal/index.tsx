import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login, toggleAuthModal } from "@state/authReducer/actions";
import React, { useState } from "react";
import Input from "@components/FormComponents/Input";
import Button from "@components/Button";
import * as yup from "yup";

const AuthContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-shadow: inset 0rem 0rem 10rem black;
  div.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: white;
    min-width: 50%;
    min-height: 50%;
    border-radius: 2rem;
    box-shadow: 0rem 0rem 2rem black;
    .title {
      position: absolute;
      top: 0;
    }
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
      border-radius: 0;
    }
  }
`;

const formSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function AuthModal() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function handleExternalClickCapture(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleAuthModal());
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitDisabled(true);
    dispatch(login(formValues.username, formValues.password));
  }

  function onFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <AuthContainer onClick={handleExternalClickCapture}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="title">Login</h2>
        <form onSubmit={async (e) => await onSubmit(e)}>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            className="input-item"
            value={formValues.username}
            onChange={onFormChange}
          />
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            className="input-item"
            value={formValues.password}
            onChange={onFormChange}
          />
          <Button buttonText="Submit" isLink={false} cta type="submit" />
        </form>
      </div>
    </AuthContainer>
  );
}
