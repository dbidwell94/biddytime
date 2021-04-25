import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

interface IBaseProps {
  /**
   * The text to render within the button element
   */
  buttonText: string;

  /**
   * Indicated weather or not this button should be rendered as a call to action
   */
  cta?: boolean;
}

type IButtonProps = IBaseProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    /**
     * Is this button also a link? Then it will render as an link component instead
     */
    isLink: false;
  };

type IAnchorProps = IBaseProps & {
  /**
   * Is this button also a link? Then it will render as an link component instead
   */
  isLink: true;

  /**
   * Where should this link route to?
   */
  to: string;
};

type IProps = IAnchorProps | IButtonProps;

export default function Button(props: IProps) {
  const { buttonText, cta } = props;

  if (props.isLink) {
    const { to } = props;
    return (
      <Link to={to}>
        <ButtonContainer cta={cta}>
          <p>{buttonText}</p>
        </ButtonContainer>
      </Link>
    );
  } else if (props.isLink === false) {
    const { onClick } = props;
    return (
      <ButtonContainer cta={cta} onClick={onClick}>
        <p>{buttonText}</p>
      </ButtonContainer>
    );
  } else return <></>;
}
