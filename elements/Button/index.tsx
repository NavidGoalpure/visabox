import { Loading } from 'elements/Loading';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}
export const Button = ({
  children,
  disabled = false,
  isLoading = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <Container type={type} {...props} disabled={disabled || isLoading}>
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
  width: auto;
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
    filter: drop-shadow(0px 20px 10px #0008);
  }
`;

const Container = styled.button`
  ${ButtonCss}
`;
