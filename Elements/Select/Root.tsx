import styled, { css } from "styled-components";
import * as Select from "@radix-ui/react-select";
import { BsChevronDown } from "react-icons/bs";
import { layer3_TextColor } from "Styles/Theme/Layers/layer3/theme";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import { SelectProps } from "@radix-ui/react-select";
import theme from "styled-theming";
interface Props extends SelectProps {
  triggerText: string;
}

const Root: React.FC<Props> = ({ triggerText, children, ...props }) => {
  return (
    <Select.Root {...props}>
      <Trigger aria-label="Language">
        <TriggerValue placeholder={triggerText} />
        <Icon>
          <ArrowIcon />
        </Icon>
      </Trigger>
      {/* ////////////// */}
      <Portal>
        <Content position="popper" align="center" className="SelectContent">
          <Viewport >{children}</Viewport>
        </Content>
      </Portal>
    </Select.Root>
  );
};
export { Root };
const ContainerBorder = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray12);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css``,
});
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
  ${ContainerBorder}
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
  width: 100%;
  height: 100%;
  background: var(--color-gray13);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  z-index: 4;
`;
const Viewport = styled(Select.Viewport)`
  z-index: 5;
  overflow: unset !important;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
