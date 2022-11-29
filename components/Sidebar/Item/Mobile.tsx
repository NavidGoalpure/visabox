import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from 'styled-theming';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'consts/device';
import { ComponentTextStyle } from 'Styles/Theme/Component';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const Mobile: React.FC<Props> = ({ title, value, icon }) => {
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
  flex-direction: column;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
////////////

const TabsTrigger = styled(Tabs.Trigger)`
  ${ComponentTextStyle}
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
    color: white;
  }

  ////////////hover//////////
  @media ${deviceMin.laptopS} {
    :hover {
      background: var(--color-primary5);
      color: var(--color-gray2);
    }
  }
`;
