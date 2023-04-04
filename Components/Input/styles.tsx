import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline5Style, Headline7Style } from "Styles/Typo";
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
const LabelTheme = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray11);
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
  max-width: 27rem;
  height: 100%;
`;

const InputContainer = styled.div<{
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;

  ////////////disabled////////////
  ${({ disabled }) => disabled && "border-color:var(--color-gray5); "};
`;
const Label = styled.label`
  ${LabelTheme};
  ${Headline5Style}
`;
const InputStyle = css<{
  hasError: boolean;
  disabled: boolean;
}>`
  ${inputTheme};
  ${Headline7Style};
  width: 100%;
  border-radius: 15px;
  padding: 1.5rem;
  box-sizing: border-box;
  ${({ hasError }) => hasError && "color:var(--color-error);"};
  ${({ disabled }) => disabled && "color:var(--color-gray3); "};

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
  ${InputStyle}
`;

const Error = styled.h5`
  color: var(--color-error);
  margin-top: 0.5rem;
`;
export { Error, StyledInput, InputContainer, Container, InputStyle, Label };
