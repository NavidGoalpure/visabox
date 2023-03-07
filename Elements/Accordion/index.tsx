import * as Accordion from "@radix-ui/react-accordion";
import React, { HTMLAttributes, ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import { Headline7Style } from "Styles/Typo";
import { getSmartBgBaseOnLevel } from "Styles/utils";

import { AiOutlinePlus } from "react-icons/ai";
import theme from "styled-theming";
import { deviceMin } from "Consts/device";
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import { layer3_style } from "Styles/Theme/Layers/layer3/style";

interface Props extends HTMLAttributes<HTMLDivElement> {
  triggerText: string;
  content: ReactNode;
  backgroundLayer: "1" | "2A" | "2B" | "3";
  isOpen?: boolean;
}

export const MaraAccordion: React.FC<Props> = ({
  triggerText,
  content,
  backgroundLayer,
  isOpen = false,
  ...props
}) => (
  <AccordionRoot
    {...props}
    type="single"
    defaultValue={isOpen ? "item" : ""}
    collapsible
    data-testid="Marabox-Accordion"
  >
    <AccordionItem value="item">
      <AccordionHeader $backgroundLayer={backgroundLayer}>
        <AccordionTrigger>
          <PlusIcon />
          {triggerText}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        <Content id="content">{content}</Content>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
);

const TextColor = theme("mode", {
  light: css`
    color: black;
  `,
  dark: css`
    color: white;
  `,
});
const slideDown = keyframes`
 from {
    transform:translateY(-100%);
  }
  to {
    transform:translateY(0);
  
}
`;
const slideUp = keyframes`
  
  to {
    transform:translateY(-100%);
  }
`;
const AccordionRoot = styled(Accordion.Root)`
  width: 100%;
  margin: 0;
  padding: 1rem;
`;
const AccordionItem = styled(Accordion.Item)`
  overflow: hidden;
  margin-top: 1px;
  :-within  {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--mauve12);
  }
`;
const AccordionHeader = styled(Accordion.Header)<{
  $backgroundLayer: "1" | "2A" | "2B" | "3";
}>`
  display: flex;
  position: relative;
  z-index: 11;
  ${({ $backgroundLayer }) => getSmartBgBaseOnLevel($backgroundLayer)}
  border: none;
`;
const AccordionTrigger = styled(Accordion.Trigger)`
  ${layer2A_TextStyle}
  margin: 0;
  position: relative;
  z-index: 10;
  width: 100%;
  color: white;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  transition: all 500ms ease;
  border-radius: 30px;
  background-color: var(--color-primary3);
  cursor: pointer;
  @media ${deviceMin.mobileL} {
    ${layer2A_SubtitleStyle};
    margin: 0;
    color: white;
  }
  &[data-state="open"] {
    border-radius: 30px 30px 0 0;
    svg {
      path:nth-child(2) {
        transform: rotate(90deg);
      }
    }
  }
  :hover {
    background-color: var(--color-primary4);
  }
`;
const PlusIcon = styled(AiOutlinePlus)`
  color: var(--color-primary3);
  padding: 0.4rem;
  width: 1rem;
  height: auto;
  background-color: white;
  border-radius: 50%;
  path {
    transform-origin: center;
    transition: all 0.3s ease;
  }
`;
const AccordionContent = styled(Accordion.Content)`
  ${layer3_style}
  ${Headline7Style}
  overflow: hidden;
  position: relative;
  z-index: 0;
  font-size: 15px;
  border-top: unset;
  border-radius: 0px 0px 30px 30px;
  &[data-state="open"] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
  &[data-state="closed"] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
`;
const Content = styled.div`
  ${TextColor}
  padding: 1rem 1rem;
`;
