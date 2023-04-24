import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Label } from '@radix-ui/react-label';
import styled, { css, keyframes } from 'styled-components';
import { MultiLanguageText } from 'Interfaces';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import theme from 'styled-theming';
import { AiOutlineCheck } from 'react-icons/ai';
import { Headline7Style } from 'Styles/Typo';

export interface RadioItemProps extends ToggleGroup.ToggleGroupItemProps {
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
        <Checkmark />{' '}
      </RadioGroupIndicator>
      <StyledLabel className='label' htmlFor={props.id}>
        {dt(text)}
      </StyledLabel>
    </Container>
  );
};
const ContainerTheme = theme('mode', {
  light: css`
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
opacity:0;
}
to{
transform:scale(1);
// padding-inline-end:1rem;
opacity:1;
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
  padding: 1rem 3rem;
  width: fit-content;
  transition: all 0.5s ease;
  span {
    opacity: 0;
  }
  &[data-state='on'] {
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
`;
const Checkmark = styled(AiOutlineCheck)`
  width: 100%;
  height: 100%;
`;
