import styled, { css } from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { ReactNode } from 'react';
import { SelectItemProps } from '@radix-ui/react-select';
import { directionStyles } from 'Styles/Theme';
import theme from 'styled-theming';
import { deviceMin } from 'Consts/device';

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
  padding: 0.5rem 0.5rem;
  width: max-content;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  justify-content: flex-start;
  transition: all 0.3s ease;
  /* gray10 */
  min-height: 3.5rem;
  border-bottom: 1px solid var(--color-gray12);
  span {
    width: 100%;
  }
  &:last-child {
    border: none;
  }
  @media ${deviceMin.tabletS} {
    :hover {
      background: var(--color-gray11);
      color: var(--color-gray1);
    }
  }
`;
const SelectItem = styled(Select.Item)`
  ${SelectItemCss}
`;
