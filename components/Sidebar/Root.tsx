import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from 'styled-theming';
import { componentBackground, boxShadow } from 'styles/Theme';

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: ReactNode;
  bodies: ReactNode;
  defaultValue: string;
}
export const Root: React.FC<Props> = ({ items, bodies, defaultValue }) => {
  return (
    <TabsRoot defaultValue={defaultValue}>
      <TabsList aria-label='sidebar'>{items}</TabsList>
      <ContentsContainer>{bodies}</ContentsContainer>
    </TabsRoot>
  );
};
const rootColor = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: white;
  `,
});
const TabsRoot = styled(Tabs.Root)`
  ${rootColor}
  display: flex;
  justify-content: flex-start;
  //
  width: 100%;
`;
const TabsList = styled(Tabs.TabsList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  gap: 8px;
  //
  position: relative;
  width: max-content;
  min-width: 11.5rem;
  padding: 1.5rem 0px;
  padding-left: 1rem;
  //color
  ${componentBackground}
  ${boxShadow}
  //
  border-radius: 10px;
  overflow: hidden;
  list-style: none;
`;

const ContentsContainer = styled.div`
  background: red;
  width: 100%;
  margin: 0 4.5rem;
`;
