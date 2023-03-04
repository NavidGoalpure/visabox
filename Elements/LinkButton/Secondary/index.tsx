import { SecondaryButtonCss } from 'Elements/Button/Secondary';
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
}
export const SecondaryButton = ({
  children,
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <Container {...props} disabled={disabled || isLoading}>
      {isLoading ? <Loading /> : children}
    </Container>
  );
};

const Container = styled.a`
  ${SecondaryButtonCss}
`;
