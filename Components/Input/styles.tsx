import { FaExclamationTriangle } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import {
  input_Label,
  input_Modal,
  input_Modal_Focus,
} from 'Styles/Theme/elementsInModal/input';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { Headline7Style } from 'Styles/Typo';

const SvgLoadingAnimation = keyframes`
  100%{
    stroke-dashoffset:12rem;
  }
`;
const LoadingBackgroundTheme = theme('mode', {
  light: css`
    stroke: var(--color-gray9);
  `,
  dark: css`
    stroke: var(--color-gray5);
  `,
});
const LoadingMovingTheme = theme('mode', {
  light: css`
    stroke: var(--color-gray3);
  `,
  dark: css`
    stroke: var(--color-gray8);
  `,
});
const inputTheme = theme('mode', {
  light: css`
    background: var(--color-gray13);
    box-shadow: var(--box-shadow-layer2);
    color: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-gray6);
    color: var(--color-gray13);
    color-scheme: dark;
  `,
});
const InputDisabledTheme = theme('mode', {
  light: css`
    background: var(--color-gray10);
    color: var(--color-gray8);
  `,
  dark: css`
    background: var(--color-gray4);
    color: var(--color-gray7);
  `,
});
const inputFocusTheme = theme('mode', {
  light: css`
    border-bottom: 2px solid var(--color-gray2);
    background: white;
    box-shadow: var(--box-shadow-layer2);
  `,
  dark: css`
    background: var(--color-gray7);
    border-bottom: 2px solid var(--color-gray10);
  `,
});
const inputPlaceHolderTheme = theme('mode', {
  light: css`
    color: var(--color-gray9);
  `,
  dark: css`
    color: var(--color-gray8);
  `,
});
const ErrorTheme = theme('mode', {
  light: css`
    box-shadow: var(--box-shadow-layer2);
  `,
  dark: css``,
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

  input[type='date']::-webkit-calendar-picker-indicator {
    background: transparent;
    color: transparent;
    cursor: pointer;
    height: auto;
    position: absolute;
    inset: 0;
    width: auto;
  }
  ////////////disabled////////////
  ${({ disabled }) => disabled && 'border-color:var(--color-gray5); '};
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    bottom: 50%;
    inset-inline-end: 1rem;
    transform: translateY(50%);
  }
`;
const Label = styled.label<{ isInputInModal: boolean }>`
  ${Layer1_SubtitleStyle};
  margin: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  ${({ isInputInModal }) => isInputInModal && `${input_Label}`}
`;
const InputStyle = css<{
  hasError: boolean;
  disabled: boolean;
  isInputInModal: boolean;
}>`
  ${inputTheme};
  ${Headline7Style};
  // this is for box shadow to not get cut off
  width: calc(100% - 4px);
  margin: 0 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 1rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  ${({ isInputInModal }) => isInputInModal && `${input_Modal}`}
  //////////////error////////////
  ${({ hasError }) =>
    hasError &&
    `
  border:2px solid var(--color-fail1);
  border-radius: 15px 15px 0px 0px;

  `};
  ////////////////disabled/////////////
  ${({ disabled }) =>
    disabled &&
    css`
      ${InputDisabledTheme};
      box-shadow: unset;
    `};
  ////////////////delete arrows in type=number input////////////////
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  /////////focus////////
  ${({ hasError, isInputInModal }) =>
    !hasError && isInputInModal
      ? `:focus{${input_Modal_Focus}}`
      : css`
          :focus {
            ${inputFocusTheme};
          }
        `}
  /////////placeholder//////////////
  ::placeholder {
    ${Headline7Style};
    ${inputPlaceHolderTheme};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-gray10);
    ${({ disabled }) => disabled && 'color:var(--color-gray5); '};
  }
`;
const StyledInput = styled.input`
  ${InputStyle};
`;
const LoadingBackgroundCircle = styled.circle`
  ${LoadingBackgroundTheme};
  fill: none;
`;
const LoadingMovingCircle = styled.circle`
  ${LoadingMovingTheme}
  fill: none;
  stroke: var(--color-gray8);
  z-index: 10;
  stroke-linecap: round;
  stroke-dasharray: 2rem 10rem;
  animation: ${SvgLoadingAnimation} 0.7s linear infinite;
`;

const ErrorElement = styled.h5`
  padding: 0.75rem 1rem;
  z-index: 10;
  background: var(--color-fail1);
  border-radius: 0px 0px 15px 15px;
  color: var(--color-gray13);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  ${ErrorTheme};
`;
const ErrorIcon = styled(FaExclamationTriangle)`
  color: var(--color-fail3);
`;
export {
  ErrorIcon,
  StyledInput,
  InputWrapper,
  ErrorElement,
  InputContainer,
  Container,
  InputStyle,
  Label,
  LoadingBackgroundCircle,
  LoadingMovingCircle,
};
