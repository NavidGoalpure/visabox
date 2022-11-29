import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from 'styled-theming';
import { boxShadow, directionStyles } from 'Styles/Theme';
import { deviceMin } from 'consts/device';
import { componentBackground } from 'Styles/Theme/Component';

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: ReactNode;
  bodies: ReactNode;
  defaultValue: string;
}
export const Root: React.FC<Props> = ({ items, bodies, defaultValue }) => {
  return (
    <TabsRoot defaultValue={defaultValue}>
      <TabsList aria-label='sidebar'>{items}</TabsList>
      <ContentsContainer id='contents-container'>{bodies}</ContentsContainer>
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
  ${directionStyles}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  //
  width: 100%;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
const TabsList = styled(Tabs.TabsList)`
  ${directionStyles}
  ${componentBackground}
  ${boxShadow}
  //
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  //
  position: relative;
  width: 100%;
  min-width: 11.5rem;
  height: 6rem;
  overflow: hidden;
  list-style: none;
  @media ${deviceMin.tabletS} {
    width: max-content;
    flex-direction: column;
    padding: 1.5rem 0px;
    padding-inline-start: 1rem;
    border-radius: 10px;
    height: auto;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  @media ${deviceMin.tabletS} {
    margin: 0 4.5rem;
  }
`;
