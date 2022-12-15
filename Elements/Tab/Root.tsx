import React, { HTMLAttributes, ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styled, { css } from 'styled-components/macro';
import { deviceMin } from 'Consts/device';
import theme from 'styled-theming';

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: ReactNode;
  bodies: ReactNode;
  defaultValue: string;
}
export const Root: React.FC<Props> = ({ items, bodies, defaultValue }) => (
  <TabsRoot defaultValue={defaultValue}>
    <TabsList aria-label='tabs'>{items}</TabsList>
    <ContentsContainer id='contents-container'>{bodies}</ContentsContainer>
  </TabsRoot>
);

export default Root;

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  @media ${deviceMin.tabletS} {
    overflow: hidden;
  }
`;
export const backgroundTabsList = theme('mode', {
  light: css`
    background: var(--color-gray13);
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    background: var(--color-gray7);
  `,
});
const TabsList = styled(Tabs.List)`
  ${backgroundTabsList}
  display: flex;
  justify-content: space-between;
  width: max-content;
  min-width: 100%;
  height: 4rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  @media ${deviceMin.tabletS} {
    margin: 0 4.5rem;
  }
`;
