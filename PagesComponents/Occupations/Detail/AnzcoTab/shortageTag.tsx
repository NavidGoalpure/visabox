import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline6Style } from 'Styles/Typo';
import { HTMLAttributes, ReactNode } from 'react';
import { ShortageStatus } from './interfaces';

interface Props extends HTMLAttributes<HTMLDivElement> {
  contentKey: string;
  contentValue: ShortageStatus;
}
const ShortageTag: React.FC<Props> = ({
  contentKey,
  contentValue,
  ...props
}) => {
  return (
    <Container {...props} contentValue={contentValue}>
      <ContentKey>{contentKey}</ContentKey>
      <ContentValue>{contentValue}</ContentValue>
    </Container>
  );
};
export default ShortageTag;

const ContentKeytheme = theme('mode', {
  light: css`
    background-color: white;
  `,
  dark: css`
    background: var(--color-gray6);
    color: white;
  `,
});

const Container = styled.div<{
  contentValue: ShortageStatus;
}>`
  ${({ contentValue }) =>
    contentValue === ShortageStatus.NoShortage &&
    'background-color: var(--color-primary6); border: 3px solid var(--color-primary6);   color: var(--color-gray9);'}
  ${({ contentValue }) =>
    contentValue === ShortageStatus.MetropolitanShortage &&
    'background-color: var(--color-primary5);border: 3px solid var(--color-primary5);'}
    ${({ contentValue }) =>
    contentValue === ShortageStatus.Shortage &&
    'background-color: var(--color-primary3);border: 3px solid var(--color-primary3);'}
     ${({ contentValue }) =>
    contentValue === ShortageStatus.RegionalShortage &&
    'background-color: var(--color-primary4);border: 3px solid var(--color-primary4);'}
    ${({ contentValue }) =>
    contentValue === ShortageStatus.Unknown &&
    'background-color: var(--color-fail1);border: 3px solid var(--color-fail1);'}
  border-radius: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 2rem;
  margin-bottom: 1rem;
  box-shadow: none;
`;

///////////////////////

const ContentKey = styled.h3`
  ${Headline6Style}
  ${ContentKeytheme}
  padding: 0.25em 1em;
  display: flex;
  width: 50%;
  justify-content: center;
`;
///////////////////////

const ContentValue = styled.div`
  padding: 0.15em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
