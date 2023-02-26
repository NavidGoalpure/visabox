import styled, { css } from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { BsChevronDown } from 'react-icons/bs';
import { layer3_TextColor } from 'Styles/Theme/Layers/layer3/theme';
import { layer3_TextStyle } from 'Styles/Theme/Layers/layer3/style';
import { SelectProps } from '@radix-ui/react-select';
import theme from 'styled-theming';
import { ReactNode, useRef } from 'react';
import { ScrollBox } from 'Elements/ScrollBox';
import React from 'react';
import { findSmartHeight } from './utils';
interface Props extends SelectProps {
  triggerText: string;
  triggerIcon?: ReactNode;
  maxHeightInRem?: number;
}

const Root: React.FC<Props> = ({
  triggerText,
  children,
  triggerIcon,
  disabled,
  maxHeightInRem,
  ...props
}) => {
  return (
    <Select.Root
      onOpenChange={(isOpen) => {
        if (isOpen) {
          document.body.style.pointerEvents = 'none';
        }
      }}
      {...props}
    >
      {!disabled && (
        <Trigger aria-label='Language' id='trigger'>
          {triggerIcon}
          <TriggerValue placeholder={triggerText} />

          <Icon>
            <ArrowIcon id='arrow-down' />
          </Icon>
        </Trigger>
      )}
      {/* ////////////// */}
      <Portal>
        <Content
          position='popper'
          align='center'
          className='SelectContent'
          onCloseAutoFocus={() => (document.body.style.pointerEvents = 'auto')}
        >
          <ScrollBox
            heightInRem={findSmartHeight({
              maxHeightInRem,
              childrenItems: children,
            })}
          >
            <Viewport>{children}</Viewport>
          </ScrollBox>
        </Content>
      </Portal>
    </Select.Root>
  );
};
export { Root };
const ContainerBorder = theme('mode', {
  light: css`
    border: 1px solid var(--color-gray12);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css``,
});
const Trigger = styled(Select.Trigger)`
  ${layer3_TextStyle}
  display: flex;
  align-items: baseline;

  gap: 0.5rem;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    height: 2rem;
  }
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
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 4;
  &[data-state='open'] {
    position: relative;
  }
`;
const Content = styled(Select.Content)`
  width: 100%;
  height: 100%;
  background: var(--color-gray13);
  border-radius: 15px;
  z-index: 4;
  overflow: hidden;
`;
const Viewport = styled(Select.Viewport)`
  z-index: 5;
  position: relative;
  display: flex;
  overflow: unset !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
