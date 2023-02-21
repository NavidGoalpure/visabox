import { MaraAccordion } from "Elements/Accordion";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import * as Select from "@radix-ui/react-select";
import { useLocale } from "Hooks/useLocale";
import { Languages } from "Interfaces";
import { BsChevronDown } from "react-icons/bs";
import { layer3_TextColor } from "Styles/Theme/Layers/layer3/theme";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import BritishFlag from "./Images/BritishFlag.svg";
import IranFlag from "./Images/IranFlag.svg";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

interface Option {
  value: string;
  icon?: ReactNode;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  triggerText: string;
  options: Option[];
}

const MartSelect: React.FC<Props> = ({ triggerText, options }) => {
  return (
    <Select.Root>
      <Trigger aria-label="Language">
        <TriggerValue placeholder={triggerText} />
        <Icon>
          <ArrowIcon />
        </Icon>
      </Trigger>
      {/* ////////////// */}
      <Portal>
        <Content position="popper" className="SelectContent">
          <Viewport className="SelectViewport">
            {options.map((option) => (
              <Item value={option.value}>
                {option?.icon} <Select.ItemText>{option.value}</Select.ItemText>
              </Item>
            ))}
            {/* <Item value={"English"}>
              <FlagWrapper>
                <Flag fill src={BritishFlag} alt={"england flag"} />
              </FlagWrapper>
              <Select.ItemText>English</Select.ItemText>
            </Item>
            <Item value="Persian">
              <FlagWrapper>
                <Flag fill src={IranFlag} alt={"iran flag"} />
              </FlagWrapper>
              <Select.ItemText>Persian</Select.ItemText>
            </Item> */}
          </Viewport>
        </Content>
      </Portal>
    </Select.Root>
  );
};
export default MartSelect;

const Trigger = styled(Select.Trigger)`
  ${layer3_TextStyle}
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const TriggerValue = styled(Select.Value)`
  ${layer3_TextStyle};
`;
const Icon = styled(Select.Icon)`
  display: flex;
  justify-content: center;
`;
const ArrowIcon = styled(BsChevronDown)`
  ${layer3_TextColor};
`;

const Portal = styled(Select.Portal)`
  width: max-content;
  height: max-content;
  background: var(--color-gray13);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  position: absolute;
  top: 0%;
  left: 0;
  transform: translate(-10%, 10%);
  z-index: 4;
  &[data-state="open"] {
    position: relative;
  }
`;
const Content = styled(Select.Content)`
  background: var(--color-gray13);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0;
  // transform: translateY(60%);
  z-index: 4;
  &[data-state="open"] {
    position: relative;
  }
`;
const Viewport = styled(Select.Viewport)`
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
const Item = styled(Select.Item)`
  width: max-content;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
