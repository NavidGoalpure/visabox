import React, { HTMLAttributes, ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components/macro';
import { deviceMin } from 'consts/device';

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
`;
const TabsList = styled(Tabs.List)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid blue;
  flex-wrap: wrap;
  width: 100%;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  @media ${deviceMin.tabletS} {
    margin: 0 4.5rem;
  }
`;
