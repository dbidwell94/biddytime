import styled from "styled-components";

interface IButtonContainerProps {
  cta?: boolean;
}

const ButtonContainer = styled.button<IButtonContainerProps>`
  all: unset;
  text-transform: ${({ cta }) => (cta ? "uppercase" : "none")};
  border: 0.25rem solid ${({ cta }) => (cta ? "cyan" : "black")};
  padding: ${({ cta }) => (cta ? "0.5rem 1rem" : "0.25rem .5rem")};
  border-radius: 0.75rem;
  transition: 0.125s ease-in-out all;
  margin: 0rem 0.5rem;
  &:last-child {
    margin: 0rem 0rem 0rem 0.5rem;
  }
  &:first-child {
    margin: 0rem 0.5rem 0rem 0rem;
  }
  &:hover {
    cursor: pointer;
    background: ${({ cta }) => (cta ? "lightblue" : "grey")};
    color: ${({ cta }) => (cta ? "black" : "white")};
  }
`;

interface IButtonProps {
  /**
   * The text to render within the button element
   */
  buttonText: string;

  /**
   * Indicated weather or not this button should be rendered as a call to action
   */
  cta?: boolean;
}

export default function Button(props: IButtonProps) {
  const { buttonText, cta } = props;

  return (
    <ButtonContainer cta={cta}>
      <p>{buttonText}</p>
    </ButtonContainer>
  );
}
