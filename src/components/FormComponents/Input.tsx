import React from "react";
import styled from "styled-components";

interface IInputContainerProps {
  hasError?: boolean;
}

const InputContainer = styled.div<IInputContainerProps>`
  input {
    border: none;
    background: transparent;
    color: black;
    border-bottom: thin solid rgba(0, 0, 0, 0.25);
    height: 2rem;
    width: min-content;
    outline: none;
    transition: 0.125s ease-in-out all;
    padding: 0rem 1rem;
    &:active {
      background: transparent;
      border: none;
      border-bottom: thin solid black;
    }
    &:focus {
      border-bottom: thin solid black;
    }
    &.error {
      border: thin solid rgba(255, 0, 0, 0.5) l;
    }
  }
`;

type IInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
> & {
  errorText?: string;
};

export default React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { errorText, ...rest } = props;

  return (
    <InputContainer hasError={Boolean(errorText)} className={`${Boolean(errorText) ? "error" : ""}`}>
      <input {...rest} />
    </InputContainer>
  );
});
