import { deviceMin } from "Consts/device";
import { PrimaryButton } from "Elements/Button/Primary";
import styled from "styled-components";
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
  Layer1_HrStyle,
} from "Styles/Theme/Layers/layer1/style";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: var(--max-width-page);
  margin: 0 auto;
  padding: 2rem 1rem 0;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: var(--color-gray4);
  }
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  ${Layer1_TitleStyle}
  text-align: center !important;
  margin-bottom: 1rem;
`;
export const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
  padding-top: 2rem;
  width: 100%;
  @media ${deviceMin.tabletS} {
    padding-top: 1rem;
    text-align: center !important;
  }
`;
export const ViewAll = styled(PrimaryButton)`
  width: auto;
  margin: auto !important;
`;
export const Hr = styled.hr`
  ${Layer1_HrStyle}
  @media ${deviceMin.tabletS} {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
