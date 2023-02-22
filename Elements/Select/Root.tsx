import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { BsChevronDown } from 'react-icons/bs';
import { layer3_TextColor } from 'Styles/Theme/Layers/layer3/theme';
import { layer3_TextStyle } from 'Styles/Theme/Layers/layer3/style';
import { SelectProps } from '@radix-ui/react-select';
interface Props extends SelectProps {
  triggerText: string;
}

const Root: React.FC<Props> = ({ triggerText, children, ...props }) => {
  return (
    <Select.Root {...props}>
      <Trigger aria-label='Language'>
        <TriggerValue placeholder={triggerText} />
        <Icon>
          <ArrowIcon />
        </Icon>
      </Trigger>
      {/* ////////////// */}
      <Portal>
        <Content position='popper' className='SelectContent'>
          <Viewport className='SelectViewport'>
            {children}
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
export { Root };

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
  &[data-state='open'] {
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
  &[data-state='open'] {
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
