import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@radix-ui/react-label";
import styled, { css, keyframes } from "styled-components";
import { MultiLanguageText } from "Interfaces/Database";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import theme from "styled-theming";
import { AiOutlineCheck } from "react-icons/ai";
import { Headline7Style } from "Styles/Typo";
import { deviceTypes } from "Consts/device";
import { directionStyles } from "Styles/Theme";
import { toggleGroup_Modal } from "Styles/Theme/elementsInModal/toggleGroup";

export interface RadioItemProps extends ToggleGroup.ToggleGroupItemProps {
  text: MultiLanguageText;
  value: string;
  isiteminmodal?: boolean;
}
export const Item: React.FC<RadioItemProps> = ({
  className,
  text,
  value,
  isiteminmodal = false,
  ...props
}) => {
  const { dt } = useDynamicTranslation();
  return (
    <Container
      $isiteminmodal={isiteminmodal}
      className={className}
      {...props}
      value={value}
    >
      <RadioGroupIndicator>
        <Checkmark />{" "}
      </RadioGroupIndicator>
      <StyledLabel className="label" htmlFor={props.id}>
        {dt(text)}
      </StyledLabel>
    </Container>
  );
};
const ContainerTheme = theme("mode", {
  light: css`
    border: 2px solid var(--color-gray9);
    color: var(--color-gray9);
  `,
  dark: css`
    color: var(--color-gray10);
    background: var(--color-gray4);
    border: 3px solid var(--color-gray10);
  `,
});
const scaleUp = keyframes`
from{
transform:scale(0);
padding:0;
opacity:0;
}
to{
transform:scale(1);
// padding-inline-end:1rem;
opacity:1;
}
`;
const Container = styled(ToggleGroup.Item)<{ $isiteminmodal: boolean }>`
  ${ContainerTheme}
  ${Headline7Style}
  direction: ltr;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1000px;
  padding: 1rem 3rem;
  width: fit-content;
  height: fit-content;
  ${({ $isiteminmodal }) => $isiteminmodal && `${toggleGroup_Modal}`}
  @supports ${deviceTypes.Ios} {
    width: 40%;
    height: 1rem;
  }
  transition: all 0.5s ease;
  backdrop-filter: blur(15px);
  span {
    opacity: 0;
  }
  &[data-state="on"] {
    color: var(--color-primary4);
    border-color: var(--color-primary3);
    background: rgba(194, 255, 250, 0.1);
    span {
      animation: ${scaleUp} 0.5s forwards cubic-bezier(0.8, 2, 0.36, 0.25);
    }
    .label {
      transform: translateX(0.5rem);
    }
  }
  ///
  svg {
    max-width: 1rem;
    max-height: 1rem;
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
  color: var(--color-primary3);
`;
const StyledLabel = styled(Label)`
  font-size: 15px;
  line-height: 1;
  transition: all 0.5s ease;
  transform: translateX(-0.5rem);
  cursor: pointer;
`;
const Checkmark = styled(AiOutlineCheck)`
  width: 100%;
  height: 100%;
`;
