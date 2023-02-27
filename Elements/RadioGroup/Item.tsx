import React, { HTMLAttributes } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';
import styled from 'styled-components';
import { Module_TextColor } from 'Styles/Theme/Modals/theme';
import { MultiLanguageText } from 'Interfaces';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';

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

  return (
    <Container className={className}>
      <RadioGroupItem {...props}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <StyledLabel htmlFor={props.id}>{dt(text)}</StyledLabel>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  box-shadow: 0 2px 10px var(--blackA7);
  &:hover {
    background-color: red;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;
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
  ${Module_TextColor}
  font-size: 15px;
  line-height: 1;
  padding-left: 15px;
`;
