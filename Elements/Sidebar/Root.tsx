import React, { ReactNode } from "react";
import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import theme from "styled-theming";
import { boxShadow, directionStyles } from "Styles/Theme";
import { deviceMin } from "Consts/device";
import { layer2A_Bg } from "Styles/Theme/Layers/layer2/theme";

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: ReactNode;
  bodies: ReactNode;
  defaultValue: string;
  variant?: "UP_POSITION" | "SIDE_POSITION";
}
export const Root: React.FC<Props> = ({
  items,
  bodies,
  defaultValue,
  variant = "SIDE_POSITION",
  ...props
}) => {
  return (
    // @ts-ignore
    <TabsRoot
      defaultValue={defaultValue}
      variant={variant}
      data-testid="sidebar-root"
      {...props}>
      <TabsList aria-label="sidebar" variant={variant}>
        {items}
      </TabsList>
      <ContentsContainer id="contents-container">{bodies}</ContentsContainer>
    </TabsRoot>
  );
};
const rootColor = theme("mode", {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: white;
  `,
});
const TabsRoot = styled(Tabs.Root)<{
  variant: "UP_POSITION" | "SIDE_POSITION";
}>`
  ${rootColor}
  ${directionStyles}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 5rem;

  @media ${deviceMin.laptopS} {
    ${({ variant }) => variant === "SIDE_POSITION" && "flex-direction: row;"}
  }
`;
////////////////////////
const TopPositionCss = css``;
const SidePositionCss = css`
  flex-direction: column;
  padding: 1.5rem 0px;
  padding-inline-start: 1rem;
`;

const TabsList = styled(Tabs.TabsList)<{
  variant: "UP_POSITION" | "SIDE_POSITION";
}>`
  ${directionStyles}
  //
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  //
  position: relative;
  width: 100%;
  min-width: 11.5rem;
  height: 6rem;
  padding: 1rem;
  list-style: none;
  @media ${deviceMin.laptopS} {
   
    width: max-content;
    ${({ variant }) =>
      variant === "SIDE_POSITION" ? SidePositionCss : TopPositionCss}
    border-radius: 10px;
    height: max-content;
  }
`;

const ContentsContainer = styled.div`
  width: auto;
  height: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  @media ${deviceMin.tabletS} {
    margin: 0;
  }
`;
