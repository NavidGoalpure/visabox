import * as Accordion from "@radix-ui/react-accordion";
import React, { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components/macro";
import { Headline5Style, Headline7Style } from "Styles/Typo";
import { AiOutlinePlus } from "react-icons/ai";
import theme from "styled-theming";
import { pageBackground } from "Styles/Theme/Page";

interface Props {
  triggerContent: string;
  content: ReactNode;
}

const AccordionElement: React.FC<Props> = ({ triggerContent, content }) => (
  <AccordionRoot
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem className="AccordionItem" value="item-3">
      <AccordionHeader>
        <AccordionTrigger>
          <PlusIcon />
          {triggerContent}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent className="AccordionContent">
        <Content>{content}</Content>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
);

export default AccordionElement;
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
  max-width: 50rem;
`;
const AccordionItem = styled(Accordion.Item)`
  overflow: hidden;
  margin-top: 1px;
  :focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--mauve12);
  }
`;
const AccordionHeader = styled(Accordion.Header)`
  ${pageBackground}
  display: flex;
  position: relative;
  z-index: 11;
`;
const AccordionTrigger = styled(Accordion.Trigger)`
  ${Headline5Style};
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
  background-color: var(--color-primary6);
  border-radius: 50%;
  path {
    transform-origin: center;
    transition: all 0.3s ease;
  }
`;
const AccordionContent = styled(Accordion.Content)`
  ${Headline7Style}
  overflow: hidden;
  position: relative;
  z-index: 0;
  font-size: 15px;
  color: white;
  background-color: transparent;
  border: 2px solid var(--color-gray10);
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
  padding: 1rem 2rem;
`;