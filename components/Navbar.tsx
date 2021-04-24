import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleAuthModal } from "../state/authReducer/actions";
import Button from "./Button";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10%;
  margin: 1rem 0rem;
  div.links {
    display: flex;
    justify-content: center;
  }
`;

export default function Navbar() {
  const dispatch = useDispatch();

  function handleAuthButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(toggleAuthModal());
  }

  return (
    <Container>
      <div className="title">
        <h2>BiddyTime</h2>
      </div>
      <div className="links">
        <Button buttonText="Login" isLink to={"/home"} />
        <Button buttonText="Signup" cta isLink={false} onClick={handleAuthButtonClick} />
      </div>
    </Container>
  );
}
