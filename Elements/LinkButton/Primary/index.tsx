import { deviceMin } from 'Consts/device';
import { ButtonCss } from 'Elements/Button/Primary';
import { Loading } from 'Elements/Loading';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
  hasAnimation?: boolean;
}
export const PrimaryButton = ({
  children,
  disabled = false,
  isLoading = false,
  hasAnimation = true,
  ...props
}: ButtonProps) => {
  return (
    <Container
      hasAnimation={hasAnimation}
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loading /> : children}
    </Container>
  );
};

const Container = styled.a`
  ${ButtonCss}
`;
