import styled, { css } from "styled-components";
import * as Select from "@radix-ui/react-select";
import { ReactNode } from "react";
import { SelectItemProps } from "@radix-ui/react-select";
import { directionStyles } from "Styles/Theme";
import { deviceMin } from "Consts/device";
import { BsCheck } from "react-icons/bs";

interface Props extends SelectItemProps {
  icon?: ReactNode;
  text: ReactNode;
}

const Item: React.FC<Props> = ({ icon, text, className, ...props }) => {
  console.log("navid icon ===", icon);
  return (
    <SelectItem {...props} id="red" className={className}>
      {!icon && (
        <Select.ItemIndicator>
          <Checkmark />
        </Select.ItemIndicator>
      )}
      {icon} <Select.ItemText className="text">{text}</Select.ItemText>
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
  .text {
    width: 100%;
  }
  &:last-child {
    border: none;
  }
  &[data-state="checked"] {
    background: var(--color-primary6);
  }
  @media ${deviceMin.tabletS} {
    :hover {
      background: var(--color-gray12);
      color: var(--color-gray1);
    }
  }
`;
const SelectItem = styled(Select.Item)`
  ${SelectItemCss};
`;
const Checkmark = styled(BsCheck)`
  color: var(--color-primary3);
  height: auto;
  width: 2rem;
`;
