import styled, { css } from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { ReactNode } from 'react';
import { SelectItemProps } from '@radix-ui/react-select';
import { directionStyles } from 'Styles/Theme';

interface Props extends SelectItemProps {
  icon?: ReactNode;
  text: ReactNode;
}

const Item: React.FC<Props> = ({ icon, text, ...props }) => {
  return (
    <SelectItem {...props}>
      {icon} <Select.ItemText>{text}</Select.ItemText>
    </SelectItem>
  );
};
export { Item };
export const SelectItemCss = css`
  ${directionStyles}
  padding: 0.5rem 1rem;
  width: max-content;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  justify-content: flex-start;
  transition: all 0.3s ease;
  :hover {
    background: var(--color-gray10);
    color: var(--color-gray1);
  }
`;
const SelectItem = styled(Select.Item)`
  ${SelectItemCss}
`;
