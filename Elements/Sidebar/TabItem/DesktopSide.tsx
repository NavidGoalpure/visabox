import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from 'styled-theming';
import { directionStyles } from 'Styles/Theme';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const DesktopTabItem_Side: React.FC<Props> = ({
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
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-inline-start: 1rem;
`;
////////////
export const TabsTriggerDirStyle = theme('languageDirection', {
  ltr: css`
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  `,
  rtl: css`
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  `,
});
export const beforeDirStyle = theme('languageDirection', {
  ltr: css`
    right: 0;
  `,
  rtl: css`
    left: 0;
    rotate: 90deg;
  `,
});
export const afterDirStyle = theme('languageDirection', {
  ltr: css`
    right: 0;
  `,
  rtl: css`
    left: 0;
    rotate: 270deg;
  `,
});
const TabsTrigger = styled(Tabs.Trigger)`
  ${directionStyles}
  ${TabsTriggerDirStyle}
  height: 4rem;
  position: relative;
  list-style: none;
  width: 100%;
  cursor: pointer;
  ////////////selected//////////
  &[aria-selected='true'] {
    background: var(--color-primary3);
    color: white;
    :hover {
      background: var(--color-primary2);
      // color: var(--color-gray11);
      color: white;
      ::before {
        content: '';
        position: absolute;
        ${beforeDirStyle}
        width: 20px;
        height: 20px;
        background: transparent;
        top: -20px;
        border-bottom-right-radius: 20px;
        box-shadow: 7.5px 7.5px 0 7.5px var(--color-primary2);
      }
      ::after {
        content: '';
        position: absolute;
        ${afterDirStyle}
        width: 20px;
        height: 20px;
        background: transparent;
        bottom: -20px;
        border-top-right-radius: 20px;
        box-shadow: 7.5px -7.5px 0 7.5px var(--color-primary2);
      }
    }
  }
  &[aria-selected='true']::before {
    content: '';
    position: absolute;
    ${beforeDirStyle}
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
    ${afterDirStyle}
    width: 20px;
    height: 20px;
    background: transparent;
    bottom: -20px;
    border-top-right-radius: 20px;
    box-shadow: 7.5px -7.5px 0 7.5px var(--color-primary3);
  }
  ////////////hover//////////
  :hover {
    background: var(--color-gray7);
    color: white;
  }
`;
