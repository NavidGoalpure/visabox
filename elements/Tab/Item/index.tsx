import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';
import * as Tabs from '@radix-ui/react-tabs';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'consts/device';
import {
  componentSubtitleStyle,
  componentTextStyle,
} from 'Styles/Theme/Component';
import theme from 'styled-theming';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon?: ReactNode;
}
export const Item: React.FC<Props> = ({ title, value, icon }) => {
  return (
    <TabsTrigger value={value}>
      <ContentContainer>
        {icon}
        {title}
      </ContentContainer>
    </TabsTrigger>
  );
};
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
////////////

const ColorTriggerInactiveStyle = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const TabsTrigger = styled(Tabs.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${componentSubtitleStyle}
  margin-bottom:0;
  ${directionStyles}
  ${ColorTriggerInactiveStyle}
  width: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  // border-right: 1px solid var(--color-gray9);
  border-left: 1px solid var(--color-gray9);
  ////////////selected//////////
  &[aria-selected='true'] {
    color: var(--color-gray12);
  }
  :first-child {
    border-left: 0;
  }
  ////////////hover//////////
  @media ${deviceMin.laptopS} {
    :hover {
      background: var(--color-primary2);
      color: var(--color-gray12);
    }
  }
`;
