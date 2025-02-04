import React, { ReactNode } from "react";
import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import { directionStyles } from "Styles/Theme";
import { deviceMin } from "Consts/device";

import theme from "styled-theming";
import { layer2A_TextStyle } from "Styles/Theme/Layers/layer2/style";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
const DesktopTabItem_Top: React.FC<Props> = ({
  title,
  value,
  icon,
  className,
}) => {
  return (
    <TabsTrigger
      value={value}
      className={className}
      data-testid="sidebar-head"
      id={value}>
      <ContentContainer>
        {icon}
        {title}
      </ContentContainer>
    </TabsTrigger>
  );
};
export default DesktopTabItem_Top;
//////////////////////////

//////////

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

const TabsTriggerhover = theme("mode", {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-gray5);
    color: white;
  `,
});
const TabsBorderColor = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray11);
  `,
  dark: css`
    border: 1px solid var(--color-gray6);
  `,
});
const TabsTrigger = styled(Tabs.Trigger)`
  ${layer2A_TextStyle};
  ${TabsBorderColor}
  margin-bottom: 0rem;
  background: transparent;

  //
  ${directionStyles}
  padding: 1rem;
  border-radius: 15px;
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ////////////selected//////////
  &[aria-selected="true"] {
    background: var(--color-primary2);
    color: white;
    box-shadow: 0px 0px 4px 0px #00c8b6;
    border: none;
  }

  ////////////hover//////////
  &[aria-selected="false"] {
    @media ${deviceMin.laptopS} {
      :hover {
        color: white;
        ${TabsTriggerhover};
      }
    }
  }
`;
