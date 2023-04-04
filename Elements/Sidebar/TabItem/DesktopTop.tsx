import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'Consts/device';

import theme from 'styled-theming';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const DesktopTabItem_Top: React.FC<Props> = ({
  title,
  value,
  icon,
  className,
}) => {
  return (
    <TabsTrigger value={value} className={className} data-testid='sidebar-head'>
      <ContentContainer>
        {icon}
        {title}
      </ContentContainer>
    </TabsTrigger>
  );
};
//////////////////////////
const contentContainerActiveColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
//////////
const contentContainerDeactiveColor = theme('mode', {
  light: css`
    color: var(--color-gray5);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const TabsTriggerActivehover = theme('mode', {
  light: css`
    background: var(--color-primary4);
    color: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-primary3);
    color: var(--color-gray13);
  `,
});
const TabsTriggerhover = theme('mode', {
  light: css`
    background: var(--color-primary7);
    color: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-primary5);
    color: var(--color-gray13);
  `,
});
const TabsTrigger = styled(Tabs.Trigger)`
  ${layer2A_TextStyle}
  margin-bottom: 0rem;
  //
  ${directionStyles}
  padding: 1rem;
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ////////////selected//////////
  &[aria-selected='true'] {
    background: var(--color-primary2);
    box-shadow: 0px 0px 4px var(--color-primary4);
    color: var(--color-gray13);
    :hover {
      ${TabsTriggerActivehover}
    }
    div {
      ${contentContainerDeactiveColor}
    }
  }

  ////////////hover//////////
  @media ${deviceMin.tabletL} {
    :hover {
      ${TabsTriggerhover}
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  ${contentContainerActiveColor};
  @media ${deviceMin.laptopS} {
    flex-direction: column;
  }
  @media ${deviceMin.tabletL} {
    ${TabsTrigger}:hover {
      ${TabsTriggerhover}
    }
  }
`;
////////////


