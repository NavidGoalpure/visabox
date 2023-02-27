import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled, { css } from 'styled-components';
import { RadioGroupProps } from '@radix-ui/react-radio-group';

// interface Props extends RadioGroupProps {}
export const Root: React.FC<RadioGroupProps> = ({ ...props }) => {
  return <RadioGroupRoot {...props}></RadioGroupRoot>;
};
const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
