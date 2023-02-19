import { MaraAccordion } from "Elements/Accordion";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import * as Select from "@radix-ui/react-select";
import { useLocale } from "Hooks/useLocale";
import { Languages } from "Interfaces";
import { useRef } from "react";

const DesktopLanguageChanger = ({}) => {
  const { locale } = useLocale();
  const smartTextObj: Record<Languages, string> = {
    en: "English",
    fa: "فارسی",
  };
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger" aria-label="Language">
        <Select.Value
          placeholder={smartTextObj[locale]}
        />
        <Select.Icon className="SelectIcon"></Select.Icon>
      </Select.Trigger>
      {/* ////////////// */}
      <Portal>
        <Content position="popper" className="SelectContent">
          <Viewport className="SelectViewport">
            <Select.Item value={"English"}>
              <Select.ItemText>English</Select.ItemText>
              <Select.ItemIndicator>b</Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="Persian">
              <Select.ItemText>Persian</Select.ItemText>
              <Select.ItemIndicator>b</Select.ItemIndicator>
            </Select.Item>
          </Viewport>
        </Content>
      </Portal>
    </Select.Root>
  );
};
export default DesktopLanguageChanger;
const PopupBagroundTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});

const Portal = styled(Select.Portal)`
  background: var(--color-gray13);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  position: absolute;
  top: 0%;
  left: 0;
  // transform: translateY(60%);
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
`;
