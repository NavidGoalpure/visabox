import React, { HTMLAttributes, useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';
import styled, { css } from 'styled-components';
import { Module_RadioBtnBG, Module_TextColor, Module_TitleColor } from 'Styles/Theme/Modals/theme';
import { MultiLanguageText } from 'Interfaces';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import theme from 'styled-theming';

export interface RadioItemProps extends RadioGroupItemProps {
  text: MultiLanguageText;
  value: string;
}
export const Item: React.FC<RadioItemProps> = ({
  className,
  text,
  ...props
}) => {
  const { dt } = useDynamicTranslation();
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <Container className={className} isShow={isShow} onClick={() => setIsShow((prev) => !prev)} >
      <RadioGroupItem {...props}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <StyledLabel htmlFor={props.id}>{dt(text)}</StyledLabel>
    </Container>
  );
};

const Container = styled.div<{ isShow: boolean }>`
  ${Module_RadioBtnBG}
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-gray9);
  border-bottom: 1px solid var(--color-gray9);
  padding: 12px;
  `;
//////////////////////////////////
const RadioGroupShadow = theme('mode', {
  light: css`
    box-shadow: none;
    `,
  dark: css`
    box-shadow: 0 2px 10px var(--color-gray10);
    `,
});
const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  ${RadioGroupShadow}
  &:hover {
    box-shadow: 0 0 0 1px var(--color-gray1);
  }
  &:focus {
    background-color: var(--color-primary4);
    box-shadow: 0 3px 10px var(--color-gray10);
  }
`;
/////////////////////////////////
const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  :after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--violet11);
  }
`;
const StyledLabel = styled(Label)`
  ${Module_TitleColor}
  font-size: 15px;
  line-height: 1;
  padding-left: 15px;
`;
