import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';
import * as Tabs from '@radix-ui/react-tabs';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'consts/device';
import { componentTextStyle } from 'Styles/Theme/Component';
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
    //navid
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const TabsTrigger = styled(Tabs.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${componentTextStyle}
  margin-bottom:0;
  ${directionStyles}
  ${ColorTriggerInactiveStyle}

  width: 100px;
  height: 2rem;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #595959;
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  ////////////selected//////////
  &[aria-selected='true'] {
    color: var(--color-gray12);
    background: var(--color-primary3);
    border: 2px solid var(--color-primary2);
    border-radius: 10px 10px 0px 0px;
  }

  ////////////hover//////////
  @media ${deviceMin.laptopS} {
    :hover {
      background: var(--color-primary2);
      color: var(--color-gray12);
    }
  }
`;
