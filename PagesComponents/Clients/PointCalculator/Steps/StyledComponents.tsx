import { deviceMin } from "Consts/device";
import { PrimaryButton } from "Elements/Button/Primary";
import TooltipTag from "Elements/TooltipTag";
import { HiOutlineCalculator } from "react-icons/hi2";
import { FiInfo } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import { Headline7Style } from "Styles/Typo";
import { Hint_SecondaryIcon, Hint_SecondaryTextStyle } from "Styles/Theme/Hint/style";

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
const IconTheme = theme("mode", {
  light: css`
    color: var(--color-primary13);
  `,
  dark: css`
    color: var(--color-primary1);
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
export const Title = styled.h2`
  ${Layer1_SubtitleStyle};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  margin-top: 1rem;
  flex-direction: column;
  @media ${deviceMin.tabletL} {
    flex-direction: row;
  }
`;
export const StyledTooltipTag = styled(TooltipTag)`
  cursor: pointer;
  #trigger_button {
    gap: 0.5rem;
    padding: 0.2rem 0.75rem;
  }
`;
export const CalculatorIcon = styled(HiOutlineCalculator)`
  ${IconTheme};
  height: 1.5rem;
  width: auto;
  cursor: pointer;
`;
export const InformationIcon = styled(FiInfo)`
  ${IconTheme};
  height: 1.5rem;
  width: auto;
  cursor: pointer;
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
export const HintContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
`;
export const InfoHintIcon = styled(FiInfo)`
  ${Hint_SecondaryIcon};
`;
export const HintUl = styled.ul`
  ${Hint_SecondaryTextStyle};
`;

