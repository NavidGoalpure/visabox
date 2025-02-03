import { Montserrat, Vazirmatn } from "next/font/google";
import styled, { css } from "styled-components";
import theme from "styled-theming";
const montserrat = Montserrat({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const inputContainerBorder = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray10);
  `,
  dark: css``,
});
const InputContainer = styled.div<{
  disabled: boolean;
}>`
  ${inputContainerBorder};
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-inline-start: 1.5rem;
  padding-inline-end: 0.5rem;
  width: 100%;
  height: max-content;
  border-radius: 16px;
  ////////////disabled////////////
  ${({ disabled }) => disabled && "border-color:var(--color-gray5); "};
`;
const InputStyle = css<{
  hasError: boolean;
  disabled: boolean;
}>`
  // width: 246px;
  // height: 48px;
  border-radius: 5px;

  ${({ hasError }) => hasError && "color:var(--color-error);"};
  ${({ disabled }) => disabled && "color:var(--color-gray3); "};
  width: inherit;
  height: inherit;

  ::placeholder {
    font-family: ${montserrat.style.fontFamily}, ${vazirmatn.style.fontFamily},
      "Open Sans", "Poppin";

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
const StyledTextarea = styled.textarea`
  ${InputStyle}
`;

const Error = styled.h5`
  color: var(--color-error);
  margin-top: 0.5rem;
`;
export { Error, StyledInput, InputContainer, InputStyle, StyledTextarea };
