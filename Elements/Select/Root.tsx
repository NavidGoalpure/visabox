import styled, { css, keyframes } from 'styled-components';
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
import { device } from 'Consts/device';
import useDevice from 'Hooks/useDevice';
import { useLocale } from 'Hooks/useLocale';

interface Props extends SelectProps {
  className?: string;
  // مشخص میکنه کانتینر آیتم ها حداکثر چه اندازه ای باشه. این واحد به رم هست
  maxHeightInRem?: number;
  // اگه ترو باشه، کانتینر آیتم ها رو اسکرول نمیکنه و به اندازه کل آیتم ها کش میده
  noScroll?: boolean;
  //this is a props whichs controls the small arrow icon beside
  //the placeholder text
  hasArrowIcon?: boolean;
  contentProps?: {
    // این پراپز توی داک نوشته و کار هم میکنه اما توی تایپ های رادیکس وجود نداره
    align?: 'start' | 'center' | 'end';
    // این پراپز توی داک نوشته و کار هم میکنه اما توی تایپ های رادیکس وجود نداره. البته فول اسکرین رو من اضافه کردم
    position?: 'popper' | 'item-aligned';
    ariaLabel?: string;
    dataId?: string;
  };
  triggerProps: {
    ariaLabel?: string;
    id?: string;
    placeholder?: string;
    icon?: ReactNode;
  };
  valueProps?: {
    value: ReactNode;
  };
}

const Root: React.FC<Props> = ({
  children,
  disabled,
  maxHeightInRem,
  noScroll = false,
  contentProps,
  triggerProps,
  valueProps,
  className,
  hasArrowIcon = true,
  ...props
}) => {
  const { isLaptop } = useDevice();
  const { direction } = useLocale();

  return (
    <Container className={className}>
      <Select.Root
        onOpenChange={(isOpen) => {
          if (isOpen) {
            document.body.style.pointerEvents = 'none';
          }
        }}
        
        {...props}
      >
        {!disabled && (
          <Trigger aria-label={triggerProps?.ariaLabel} id={triggerProps?.id}>
            {triggerProps?.icon && triggerProps?.icon}
            <TriggerValue
              placeholder={triggerProps?.placeholder}
              aria-label={triggerProps?.placeholder}
            />
            {hasArrowIcon && (
              <Icon>
                <ArrowIcon />
              </Icon>
            )}
          </Trigger>
        )}
        {/* ////////////// */}
        <Portal>
          <Content
            id='select-portal'
            align={direction === 'rtl' ? 'end' : 'start'}
            data-id={contentProps?.dataId || 'select-content'}
            position={
              isLaptop || contentProps?.position === 'popper'
                ? 'popper'
                : 'item-aligned'
            }
            onCloseAutoFocus={() =>
              (document.body.style.pointerEvents = 'auto')
            }
          >
            {!isLaptop && <MobileTopIcon />}
            {noScroll ? (
              <Viewport>{children}</Viewport>
            ) : (
              <ScrollBox
                height={`${findSmartHeight({
                  maxHeightInRem,
                  childrenItems: children,
                })}rem`}
              >
                <Viewport>{children}</Viewport>
              </ScrollBox>
            )}
          </Content>
        </Portal>
      </Select.Root>
    </Container>
  );
};
export { Root };
const Container = styled.div``;

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
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const TriggerValue = styled(Select.Value)`
  ${layer3_TextStyle};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  align-items: center;
`;
const Icon = styled(Select.Icon)`
  display: flex;
  justify-content: center;
`;
const ArrowIcon = styled(BsChevronDown)`
  ${layer3_TextColor};
  width: 0.5rem;
  stroke-width: 0.2rem;
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
`;
const SelectAscendAnimation = keyframes`
from {
  bottom:-100%;
}
to{
  bottom:0%;
}
`;
const Content = styled(Select.Content)<{
  $position?: 'popper' | 'item-aligned';
}>`
  width: 100%;
  height: 100%;
  background: var(--color-gray13);
  border-radius: 10px;
  z-index: 100;
  overflow: hidden;
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;
  &[data-state='open'] {
    position: relative;
    @media ${device.tabletS} {
      position: fixed;
      border-radius: 15px 15px 0 0;
      height: 70%;
      bottom: 0;
      margin-top: auto;
      animation: ${SelectAscendAnimation} 0.3s ease;
    }
  }
`;
const MobileTopIcon = styled.hr`
  background: var(--color-gray9);
  height: 5px;
  width: 4rem;
  border-radius: 15px;
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
