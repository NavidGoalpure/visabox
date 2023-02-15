import { MaraAccordion } from "Elements/Accordion";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import * as Select from "@radix-ui/react-select";
import { useLocale } from "Hooks/useLocale";
import { Languages } from "Interfaces";

const LanguageChanger = ({}) => {
  const { locale } = useLocale();
  return (
    <Select.Root open={true}>
      <Select.Trigger className="SelectTrigger" aria-label="Language">
        <Select.Value
          placeholder={locale === Languages.en ? `English` : `Persian`}
        />
        <Select.Icon className="SelectIcon"></Select.Icon>
      </Select.Trigger>
      {/* ////////////// */}
      <Select.Portal>
        <Content className="SelectContent">
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
      </Select.Portal>
    </Select.Root>
  );
};
export default LanguageChanger;
const PopupBagroundTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});

const Content = styled(Select.Content)`
  background: red;
  padding: 1rem 1.5rem;
  position: absolute;
  top: 0%;
  left: 0;
`;
const Viewport = styled(Select.Viewport)``;
