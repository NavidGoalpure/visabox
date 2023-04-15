import { FaExclamationTriangle } from "react-icons/fa";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import { Headline7Style } from "Styles/Typo";
const inputTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    color: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-gray6);
    color: var(--color-gray13);
  `,
});
const inputPlaceHolderTheme = theme("mode", {
  light: css`
    color: var(--color-gray9);
  `,
  dark: css`
    color: var(--color-gray8);
  `,
});
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div<{
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  ////////////disabled////////////
  ${({ disabled }) => disabled && "border-color:var(--color-gray5); "};
`;
const Label = styled.label`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-bottom: 1rem;
`;
const InputStyle = css<{
  hasError: boolean;
  disabled: boolean;
}>`
  ${inputTheme};
  ${Headline7Style};
  width: 100%;
  border-radius: 15px;
  padding: 1rem;
  box-sizing: border-box;
  -webkit-appearance: none;
  ${({ hasError }) =>
    hasError &&
    `
  border:2px solid var(--color-fail1);
  border-radius: 15px 15px 0px 0px;

  `};
  ${({ disabled }) => disabled && "color:var(--color-gray3); "};
  ////////////////delete arrows in type=number input////////////////
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  /////////
  ::placeholder {
    ${Headline7Style};
    ${inputPlaceHolderTheme};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-gray10);
    ${({ disabled }) => disabled && "color:var(--color-gray5); "};
  }
`;
const StyledInput = styled.input`
  ${InputStyle};
`;

const ErrorElement = styled.h5`
  padding: 0.75rem 1rem;
  background: var(--color-fail1);
  border-radius: 0px 0px 15px 15px;
  color: var(--color-gray13);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const ErrorIcon = styled(FaExclamationTriangle)`
  color: var(--color-fail3);
`;
export {
  ErrorIcon,
  StyledInput,
  ErrorElement,
  InputContainer,
  Container,
  InputStyle,
  Label,
};
