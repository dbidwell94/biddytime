import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}) {
      flex-direction: column;
      align-items: center;
      button {
        margin: 0.25rem 0rem;
        &:last-child {
          margin: 0.25rem 0rem 0rem 0rem;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreen}) {
    flex-direction: column;
  }
`;

export default function Navbar() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

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
        {!isLoggedIn ? (
          <>
            <Button buttonText="Login" isLink={false} onClick={handleAuthButtonClick} />
            <Button buttonText="Signup" cta isLink={true} to={"/signup"} />
          </>
        ) : (
          <>
            <Button buttonText="Logout" isLink={false} />
          </>
        )}
      </div>
    </Container>
  );
}
