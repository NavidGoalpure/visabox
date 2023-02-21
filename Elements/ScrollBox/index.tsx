import React, { HTMLAttributes, ReactNode } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { directionStyles } from "Styles/Theme";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  heightToRem: number;
  type?: "auto" | "always" | "scroll" | "hover";
}
const ScrollBox: React.FC<Props> = ({
  className,
  id,
  children,
  heightToRem,
  type = "hover",
}) => {
  return (
    <ScrollAreaRoot
      data-testid="scroll-area-root"
      className={className}
      id={id}
      $heightToRem={heightToRem}
      type={type}
    >
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar id={"scroll-area-scrollbar"} orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        id={"scroll-area-scrollbar"}
        orientation="horizontal"
      >
        <ScrollArea.Thumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export { ScrollBox };

const ScrollAreaRoot = styled(ScrollArea.Root)<{ $heightToRem: number }>`
  ${directionStyles}
  width: 100%;
  height: ${({ $heightToRem }) => `${$heightToRem}rem`};
  border-radius: 4px;
  overflow: hidden;
  --scrollbar-size: 0.5rem;
`;
const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
////////////
export const positionDirStyle = theme("languageDirection", {
  ltr: css``,
  rtl: css`
    left: 0;
    right: unset !important;
  `,
});
const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  background: lightgray;
  transition: background 160ms ease-out;

  ${positionDirStyle}
  ${ScrollAreaRoot}:hover & {
    background: lightgray;
    ${positionDirStyle}
  }
  &[data-orientation="vertical"] {
    width: var(--scrollbar-size);
    border-radius: 10px;
  }
  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: var(--scrollbar-size);
  }
`;
const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: gray;
  border-radius: 10px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;
const ScrollAreaCorner = styled(ScrollArea.Corner)`
  background: lightgray;
`;
