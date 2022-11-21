import styled, { css } from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const InputContainer = styled.div<{
  disabled: boolean;
}>`
  display: flex;
  padding-bottom: 8px;
  align-items: center;
  width: 100%;

  ////////////disabled////////////
  ${({ disabled }) => disabled && 'border-color:var(--color-gray5); '};
`;
const InputStyle = css<{
  hasError: boolean;
  disabled: boolean;
}>`
  // width: 246px;
  // height: 48px;
  background: var(--color-background6-dark);
  border-radius: 5px;

  ${({ hasError }) => hasError && 'color:var(--color-error);'};
  ${({ disabled }) => disabled && 'color:var(--color-gray3); '};
  width: inherit;
  height: inherit;

  ::placeholder {
    // font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-gray4);
    ${({ disabled }) => disabled && 'color:var(--color-gray5); '};
  }
`;
const StyledInput = styled.input`
  ${InputStyle}
`;

const Error = styled.h2`
  color: var(--color-error);
  margin-top: 0.5rem;
`;
export { Error, StyledInput, InputContainer, Container, InputStyle };
