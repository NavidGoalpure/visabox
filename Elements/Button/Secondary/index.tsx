import { deviceMin } from 'Consts/device';
import { Loading } from 'Elements/Loading';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
  icon?: ReactNode;
}
export const SecondaryButton = ({
  children,
  disabled = false,
  isLoading = false,
  type = 'button',
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Container
      hasIcon={!!icon}
      type={type}
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loading /> : children}
      {!isLoading && icon}
    </Container>
  );
};
export const SecondaryButtonCss = css<{
  disabled?: boolean | undefined;
  hasIcon?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  width: -webkit-fill-available;
  height: 3rem;
  padding: 0 3rem;
  border-radius: 50px;
  font-weight: bold;
  color: var(--color-secondary1);
  background: var(--color-secondary4);
  transition: all 0.3s;
  //////////////hasIcon////////////////
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding: 0 1.5rem;
    `}
  /////////hover/////////////
  &:hover {
    background-color: var(--color-secondary3);
  }
  /////////////
  @media ${deviceMin.tabletS} {
    width: auto;
  }
`;

const Container = styled.button`
  ${SecondaryButtonCss}
`;
