import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';

interface Props extends HTMLAttributes<HTMLDivElement> {
  tabsList: ReactNode;
}
export const SideBar: React.FC<Props> = ({ tabsList }) => {
  return (
    <TabsRoot>
      {tabsList}
      {/* ///contents */}
      <ContentsContainer>
        <Tabs.Content value='tab1'>tttttab1</Tabs.Content>
        <Tabs.Content value='tab2'>tttttab2</Tabs.Content>
      </ContentsContainer>
    </TabsRoot>
  );
};
const TabsRoot = styled(Tabs.Root)`
  position: sticky;
  display: flex;
  justify-content: flex-start;
  //
  width: 100%;
`;

const ContentsContainer = styled.div`
  :red ;
`;
