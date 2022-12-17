import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';
import * as Tabs from '@radix-ui/react-tabs';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'Consts/device';
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
  ${ColorTriggerInactiveStyle}
  ${componentSubtitleStyle}
${directionStyles}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  width: 100%;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem 0;
  &::before {
    content: '';
    position: absolute;
    margin: auto;
    bottom: -25px;
    background-color: var(--color-primary5);
    width: 10px;
    height: 10px;
    transition: all 0.3s;
    border-radius: 50%;
  }
  ////////////selected//////////
  &[aria-selected='true'] {
    font-weight: 700;
    color: var(--color-gray13);
    &::before {
      width: 64px;
      border-radius: 6px;
      bottom: -5px;
      background-color: var(--color-primary5);
    }
  }
 
  ////////////hover//////////
  &:hover {
    &::before {
      background-color: var(--color-primary3);
      bottom: -5px;
    }
  }
  `;
const ContentContainer = styled.div`
  width: 100%;
  border-left: 1px solid var(--color-gray9);
  text-align: center;
  font-weight: 500;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
