import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import * as RadioGroup from 'Elements/RadioGroup';
import { RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { RadioItemProps } from 'Elements/RadioGroup/Item';
import { MultiLanguageText } from 'Interfaces/Database';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}
export const MultiChoice: React.FC<Props> = ({ children }) => {
  const items = children as unknown as RadioItemProps[];
  return (
    <Container>
      <RadioGroup.Root>{<>{items.map((item) => item)}</>}</RadioGroup.Root>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Choice = styled(RadioGroup.Item)`
  display: flex;
  position: relative;
  min-height: 45px;
  text-align: left;
  height: auto;
  border-top: 1px solid;
  border-color: #e0e2e8;
  border-color: var(--color-gray10, #e0e2e8);
  cursor: pointer;
  display: block;
`;
