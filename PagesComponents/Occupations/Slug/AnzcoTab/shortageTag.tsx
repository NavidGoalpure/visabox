import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline6Style } from 'Styles/Typo';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  contentKey: string;
  contentValue?: ReactNode;
  shortageStatus: string;
}
const ShortageTag: React.FC<Props> = ({
  shortageStatus,
  contentKey,
  contentValue,
  ...props
}) => {
  return (
    <Container {...props} shortageStatus={shortageStatus}>
      <ContentKey>{contentKey}</ContentKey>
      <ContentValue>{contentValue}</ContentValue>
    </Container>
  );
};
export default ShortageTag;

const ContentKeyBackgroundColor_NS = theme('mode', {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-primary6);
    color: var(--color-gray9);
    border: 3px solid var(--color-primary6);
  `,
});
const ContentKeyBackgroundColor_M = theme('mode', {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-primary5);
    border: 3px solid var(--color-primary5);
  `,
});
const ContentKeyBackgroundColor_S = theme('mode', {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-primary4);
    border: 3px solid var(--color-primary4);
  `,
});

const Container = styled.div<{
  shortageStatus: string;
}>`
  ${({ shortageStatus }) =>
    shortageStatus === 'NS' && ContentKeyBackgroundColor_NS}
  ${({ shortageStatus }) =>
    shortageStatus === 'M' && ContentKeyBackgroundColor_M}
    ${({ shortageStatus }) =>
    shortageStatus === 'S' && ContentKeyBackgroundColor_S}
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
  padding: 0.25em 1em;
  display: flex;
  width: 50%;
  justify-content: center;
  background: var(--color-gray6);
  color: white;
`;
///////////////////////

const ContentValue = styled.div`
  padding: 0.15em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
