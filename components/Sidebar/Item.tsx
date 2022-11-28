import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from 'styled-theming';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
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
`;
const TabsTrigger = styled(Tabs.Trigger)`
  padding: 1rem;
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  cursor: pointer;

  ////////////selected//////////
  &[aria-selected='true'] {
    background: var(--color-primary3);
    color: white;
  }
  &[aria-selected='true']::before {
    content: '';
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    top: -20px;
    border-bottom-right-radius: 20px;
    box-shadow: 7.5px 7.5px 0 7.5px var(--color-primary3);
  }
  &[aria-selected='true']::after {
    content: '';
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    bottom: -20px;
    border-top-right-radius: 20px;
    box-shadow: 7.5px -7.5px 0 7.5px var(--color-primary3);
  }
  ////////////hover//////////
  :hover {
    background: var(--color-primary5);
    color: var(--color-gray2);
  }
  :hover::before {
    content: '';
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    top: -20px;
    border-bottom-right-radius: 20px;
    box-shadow: 7.5px 7.5px 0 7.5px var(--color-primary5);
  }
  :hover::after {
    content: '';
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    bottom: -20px;
    border-top-right-radius: 20px;
    box-shadow: 7.5px -7.5px 0 7.5px var(--color-primary5);
  }
`;
