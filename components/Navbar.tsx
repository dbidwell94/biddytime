import styled from "styled-components";
import Button from "./Button";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10%;
  margin: 1rem 0rem;
`;

export default function Navbar() {
  return (
    <Container>
      <div className="title">
        <h2>BiddyTime</h2>
      </div>
      <div className="links">
        <Button buttonText="Login" />
        <Button buttonText="Signup" cta />
      </div>
    </Container>
  );
}
