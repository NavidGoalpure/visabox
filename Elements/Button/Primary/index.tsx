import { deviceMin } from "Consts/device";
import { Loading } from "Elements/Loading";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}
export const PrimaryButton = ({
  children,
  disabled = false,
  isLoading = false,
  type = "button",
  ...props
}: ButtonProps) => {
 
  return (
    <Container
      className="title"
      type={type}
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loading /> : children}
    </Container>
  );
};

export const ButtonCss = css<{
  disabled: boolean | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  width: -webkit-fill-available;
  height: 3rem;
  padding: 0 3rem;
  background: var(--color-primary4);
  border-radius: 50px;

  color: white;
  font-weight: bold;
  transition: all 0.3s;

  //////////////disabled///////////////////////

  //////////////hover///////////////////////
  &:hover {
    background: var(--color-primary2);

    transform: scale(1);
    transition: all 0.4s ease 0s;
    // filter: drop-shadow(0px 4px 4px rgb(0 0 0 / 10%));
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media ${deviceMin.tabletS} {
    width: auto;
  }
`;

const Container = styled.button`
  ${ButtonCss}
`;
