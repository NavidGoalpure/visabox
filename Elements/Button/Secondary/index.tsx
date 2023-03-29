import { deviceMin } from 'Consts/device';
import { Loading } from 'Elements/Loading';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}
export const SecondaryButton = ({
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
const secondaryButtonTheme = theme('mode', {
  light: css`
    color: var(--color-secondary1);
    background: var(--color-secondary4);
    &:hover {
      background-color: var(--color-secondary3);
    }
  `,
  dark: css`
    color: var(--color-secondary4);
    border: 1px solid var(--color-secondary4);
    &:hover {
      background-color: var(--color-secondary4);
      color: var(--color-gray3);
    }
  `,
});
export const SecondaryButtonCss = css<{
  disabled: boolean | undefined;
}>`
  ${secondaryButtonTheme}
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
  transition: all 0.3s;
  @media ${deviceMin.tabletS} {
    width: auto;
  }
`;

const Container = styled.button`
  ${SecondaryButtonCss}
`;
