import { deviceMin } from "Consts/device";
import { PrimaryButton } from "Elements/Button/Primary";
import { MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline7Style } from "Styles/Typo";

const PrevIconDirectionStyle = theme("languageDirection", {
  ltr: css``,
  rtl: css`
    transform: rotate(0deg);
  `,
});
const NextIconDirectionStyle = theme("languageDirection", {
  ltr: css``,
  rtl: css`
    transform: rotate(180deg);
  `,
});
const PrevButtonTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 33rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  gap: 3rem;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0%;
  @media ${deviceMin.tabletL} {
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    justify-content: space-between;
    background: transparent;
    gap: 0;
    box-shadow: unset;
  }
`;
export const PrevButton = styled.button<{ step: number }>`
  ${Headline7Style};
  ${PrevButtonTheme}
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0;
  transition: all 0.3s ease;
  cursor: auto;
  backdrop-filter: blur(10px);
  ${({ step }) =>
    step > 0 &&
    css`
      cursor: pointer;
      opacity: 1;
    `}
`;
export const NextButton = styled(PrimaryButton)<{ step: number }>`
  ${({ step }) =>
    step === 0 &&
    css`
      margin-inline-start: auto;
    `}
`;
export const NextIcon = styled(MdNavigateNext)`
  ${NextIconDirectionStyle};
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;

export const PrevIcon = styled(NextIcon)`
  transform: rotate(180deg);
  margin: 0;
  ${PrevIconDirectionStyle};
`;