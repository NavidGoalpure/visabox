import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from 'styled-theming';
import { boxShadow, directionStyles } from 'Styles/Theme';
import { deviceMin } from 'Consts/device';
import { componentBodyBackground } from 'Styles/Theme/Component';

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: ReactNode;
  bodies: ReactNode;
  defaultValue: string;
}
export const Root: React.FC<Props> = ({
  items,
  bodies,
  defaultValue,
  ...props
}) => {
  return (
    // @ts-ignore
    <TabsRoot defaultValue={defaultValue} {...props}>
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
  width: 100%;
  margin-bottom: 5rem;
  @media ${deviceMin.laptopS} {
    flex-direction: row;
    width: 100vw;
    padding-inline-start: 1rem;
  }
  @media ${deviceMin.bigScreen} {
    width: 100%;
  }
`;
const TabsList = styled(Tabs.TabsList)`
  ${directionStyles}
  ${componentBodyBackground}
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
  @media ${deviceMin.laptopS} {
    width: max-content;
    flex-direction: column;
    padding: 1.5rem 0px;
    padding-inline-start: 1rem;
    border-radius: 10px;
    height: max-content;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  @media ${deviceMin.tabletS} {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
  @media ${deviceMin.laptopS} {
    margin: 0 1rem;
    width: calc(100% - 2rem);
    max-width: 61rem;
  }
  @media ${deviceMin.laptopM} {
    max-width: 67rem;
  }
  @media ${deviceMin.bigScreen} {
    max-width: unset;
  }
`;
