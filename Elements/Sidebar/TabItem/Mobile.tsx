import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { directionStyles } from 'Styles/Theme';
import { deviceMin } from 'Consts/device';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';
import theme from 'styled-theming';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
const MobileTabItem: React.FC<Props> = ({ title, value, icon, className }) => {
  return (
    <TabsTrigger value={value} className={className} data-testid='sidebar-head'>
      <ContentContainer>
        {icon}
        {title}
      </ContentContainer>
    </TabsTrigger>
  );
};
export default MobileTabItem;
const TabsBorderColor = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray11);
  `,
  dark: css`
    border: 1px solid var(--color-gray6);
  `,
});
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${deviceMin.laptopS} {
    flex-direction: column;
  }
`;
////////////

const TabsTrigger = styled(Tabs.Trigger)`
  ${layer2A_TextStyle}
  ${TabsBorderColor}
  margin-bottom: 0rem;
  //
  ${directionStyles}
  padding: 1rem;
  min-width: 5rem;
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 15px;

  ////////////selected//////////
  &[aria-selected="true"] {
    background: var(--color-primary2);
    color: white;
    box-shadow: 0px 0px 4px 0px #00c8b6;
    border: none;
  }

  ////////////hover//////////
  @media ${deviceMin.laptopS} {
    :hover {
      background: var(--color-primary5);
      color: white;
    }
  }
`;
