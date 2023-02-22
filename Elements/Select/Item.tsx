import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { ReactNode } from 'react';
import { SelectItemProps } from '@radix-ui/react-select';

interface Props extends SelectItemProps {
  icon?: ReactNode;
  text: string;
}

const Item: React.FC<Props> = ({ icon, text, ...props }) => {
  return (
    <SelectItem {...props}>
      {icon} <Select.ItemText>{text}</Select.ItemText>
    </SelectItem>
  );
};
export { Item };
const SelectItem = styled(Select.Item)`
  width: max-content;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  justify-content: flex-start;
`;
