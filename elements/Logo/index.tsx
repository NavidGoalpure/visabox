import { HtmlHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import {  elementColorBody, directionStyles } from 'styles/Theme';
import darkLogo from './darkLogo.svg';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}
const Logo: React.FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      <img src={darkLogo}></img>
    </Container>
  );
};
export { Logo };

const Container = styled.div``;
