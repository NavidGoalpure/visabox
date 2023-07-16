import React, { ReactNode } from "react";
import * as Popover from "@radix-ui/react-popover";
import styled, { css } from "styled-components";
import theme from "styled-theming";
interface Props {
  trigger: ReactNode;
  content: ReactNode;
  modal?: boolean;
}
const PopOver: React.FC<Props> = ({ trigger, content, modal = true }) => (
  <Popover.Root modal={modal}>
    <Popover.Trigger asChild>{trigger}</Popover.Trigger>
    <Portal>
      <Content className="PopoverContent" sideOffset={5}>
        {content}
        {/* <CloseWrapper className="PopoverClose" aria-label="Close">
          <CloseIcon />
        </CloseWrapper> */}
        <Arrow className="PopoverArrow" />
      </Content>
    </Portal>
  </Popover.Root>
);

export default PopOver;
const ContainerBorder = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray12);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
});
const Portal = styled(Popover.Portal)`
  z-index: 100;
`;
const Content = styled(Popover.Content)`
  ${ContainerBorder}
  width: max-content;
  height: max-content;
  background: var(--color-gray13);
  border-radius: 15px;
  z-index: 100;
`;
const Arrow = styled(Popover.Arrow)`
  fill: var(--color-gray13);
  margin: 0.5rem 0;
`;
