import { deviceMin } from "Consts/device";
import { PrimaryButton } from "Elements/Button/Primary";
import Link from "next/link";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from "Styles/Theme/Layers/layer1/style";
const ContainerTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray4);
  `,
});
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;

  max-width: var(--max-width-page);
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    ${ContainerTheme};
  }
  @media ${deviceMin.tabletS} {
    flex-direction: row;
    height: 100vh;
  }
`;

export const Title = styled.h2`
  ${Layer1_TitleStyle}
  text-align: center !important;
  margin-bottom: 1rem;
  z-index: 10;
`;
export const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
  padding-top: 2rem;
  width: 100%;
  z-index: 10;
  @media ${deviceMin.tabletS} {
    padding-top: 1rem;
    text-align: center !important;
  }
`;
export const StyledLink = styled(Link)`
  z-index: 10;
`;
export const ViewAll = styled(PrimaryButton)`
  width: auto;
  margin: auto !important;
`;
