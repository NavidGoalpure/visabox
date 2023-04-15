import { deviceMin } from "Consts/device";
import { Loading } from "Elements/Loading";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
  hasAnimation?: boolean;
  icon?: ReactNode;
}
export const PrimaryButton = ({
  children,
  disabled = false,
  isLoading = false,
  hasAnimation = true,
  icon,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <Container
      hasAnimation={hasAnimation}
      type={type}
      hasIcon={!!icon}
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loading /> : children}
      {!isLoading && icon}
    </Container>
  );
};
const DisabledTheme = theme("mode", {
  light: css`
    background: var(--color-gray10);
    color: white;
  `,
  dark: css`
    color: var(--color-gray10);
    background: var(--color-primary1);
  `,
});
export const ButtonCss = css<{
  disabled: boolean | undefined;
  hasAnimation: boolean;
  hasIcon: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 0.5rem;
  cursor: pointer;
  width: -webkit-fill-available;
  height: 3rem;
  padding: 0 3rem;
  background: var(--color-primary4);
  border-radius: 50px;

  color: white;
  font-weight: bold;
  transition: all 0.3s;
  //////////////hasIcon////////////////
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding: 0 1.5rem;
    `}
  //////////////disabled///////////////////////
${({ disabled }) =>
    disabled &&
    css`
      ${DisabledTheme};

      cursor: auto;
    `}
  //////////////hover///////////////////////
  ${({ hasAnimation, disabled }) =>
    hasAnimation &&
    !disabled &&
    css`
      &:hover {
        background: var(--color-primary2);
        transition: all 0.4s ease 0s;
        // filter: drop-shadow(0px 4px 4px rgb(0 0 0 / 10%));
        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    `}

  @media ${deviceMin.tabletS} {
    width: auto;
  }
`;

const Container = styled.button`
  ${ButtonCss}
`;
