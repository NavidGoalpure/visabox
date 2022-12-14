import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';
import * as Tabs from '@radix-ui/react-tabs';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'Consts/device';
import { componentTextStyle } from 'Styles/Theme/Component';
import theme from 'styled-theming';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const DesktopTop: React.FC<Props> = ({
  title,
  value,
  icon,
  className,
}) => {
  return (
    <TabsTrigger value={value} className={className}>
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
  font-weight: bold;

  @media ${deviceMin.laptopS} {
    flex-direction: column;
  }
`;
////////////
const TabsTriggerActivehover = theme('mode', {
  light: css`
    background: var(--color-primary4);
    color: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-primary3);
    color: var(--color-gray6);
  `,
});
const TabsTriggerhover = theme('mode', {
  light: css`
    background: var(--color-primary7);
    color: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-primary5);
    color: var(--color-gray6);
  `,
});
const TabsTrigger = styled(Tabs.Trigger)`
  ${componentTextStyle}
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
    :hover {
      ${TabsTriggerActivehover}
    }
  }

  ////////////hover//////////
  @media ${deviceMin.laptopS} {
    :hover {
      ${TabsTriggerhover}
    }
  }
`;
