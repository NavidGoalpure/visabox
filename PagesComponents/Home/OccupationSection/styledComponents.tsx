import { deviceMin } from "Consts/device";
import { PrimaryButton } from "Elements/Button/Primary";
import Link from "next/link";
import styled from "styled-components";
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from "Styles/Theme/Layers/layer1/style";

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

  @media ${deviceMin.tabletS} {
    flex-direction: row-reverse;
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
export const ViewAll = styled(PrimaryButton)`
  width: auto;
  margin: auto !important;
  z-index: 10;
`;
export const StyledLink = styled(Link)`
  z-index: 10;
`;