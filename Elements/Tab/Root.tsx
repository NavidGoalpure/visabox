import React, { HTMLAttributes, ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styled, { css } from 'styled-components/macro';
import { deviceMin } from 'Consts/device';
import theme from 'styled-theming';

interface Props extends HTMLAttributes<HTMLDivElement> {
  heads: ReactNode;
  bodies: ReactNode;
  defaultValue: string;
}
export const Root: React.FC<Props> = ({
  heads,
  bodies,
  defaultValue,
  ...props
}) => (
  <TabsRoot defaultValue={defaultValue} className={props.className}>
    <HeadesWrapper id='heads-container'>
      <HeadsList aria-label='tabs'>{heads}</HeadsList>
    </HeadesWrapper>
    <ContentsContainer id='contents-container'>{bodies}</ContentsContainer>
  </TabsRoot>
);

export default Root;

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HeadesWrapper = styled.div`
  overflow: auto;
  @media ${deviceMin.tabletS} {
    overflow: hidden;
  }
`;
export const backgroundHeadsList = theme('mode', {
  light: css`
    background: var(--color-gray13);
    border: 2px solid var(--color-gray11);
  `,
  dark: css`
    background: var(--color-gray7);
  `,
});
const HeadsList = styled(Tabs.List)`
  ${backgroundHeadsList}
  display: flex;
  justify-content: space-between;
  width: max-content;
  min-width: 100%;
  height: 4rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  > * {
    &:first-child {
      div {
        border-left: none;
      }
    }
  }
`;

const ContentsContainer = styled.div`
  width: auto;
  height: 100%;
`;
