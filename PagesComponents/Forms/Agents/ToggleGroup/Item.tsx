import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ToggleGroupItemProps } from "@radix-ui/react-toggle-group";
import { Label } from "@radix-ui/react-label";
import styled, { css, keyframes } from "styled-components";
import { MultiLanguageText } from "Interfaces";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import theme from "styled-theming";
import { AiOutlineCheck } from "react-icons/ai";
import { Headline7Style } from "Styles/Typo";

export interface RadioItemProps extends ToggleGroupItemProps {
  text: MultiLanguageText;
  value: string;
}
export const Item: React.FC<RadioItemProps> = ({
  className,
  text,
  value,
  ...props
}) => {
  const { dt } = useDynamicTranslation();

  return (
    <Container className={className} {...props} value={value}>
      <RadioGroupIndicator>
        <Checkmark />{" "}
      </RadioGroupIndicator>
      <StyledLabel htmlFor={props.id}>{dt(text)}</StyledLabel>
    </Container>
  );
};
const ContainerTheme = theme("mode", {
  light: css`
    // navid change when mobin add
    border: 2px solid var(--color-gray11);
    color: var(--color-gray11);
  `,
  dark: css`
    border: 2px solid var(--color-gray8);
    color: var(--color-gray8);
  `,
});
const scaleUp = keyframes`
from{
transform:scale(0);
padding:0;
}
to{
transform:scale(1);
// padding-inline-end:1rem;
}
`;
const Container = styled(ToggleGroup.Item)`
  ${ContainerTheme};
  ${Headline7Style};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  padding: 1rem 2.5rem;
  transition: all 0.5s ease;
  &[data-state="checked"] {
    color: var(--color-primary5);
    border-color: var(--color-primary3);
    background: rgba(194, 255, 250, 0.1);
  }
`;
//////////////////////////////////

/////////////////////////////////
const RadioGroupIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  position: absolute;
  color: var(--color-primary3);
  animation: ${scaleUp} 0.5s forwards ease;
`;
const StyledLabel = styled(Label)`
  font-size: 15px;
  line-height: 1;
`;
const Checkmark = styled(AiOutlineCheck)`
  width: 100%;
  height: 100%;
`;
