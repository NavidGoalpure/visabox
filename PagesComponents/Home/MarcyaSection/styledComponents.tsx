import { deviceMin } from 'Consts/device';
import { PrimaryButton } from 'Elements/Button/Primary';
import { SecondaryButton } from 'Elements/Button/Secondary';
import { ThemeModes } from 'Interfaces';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { getThemeFromLocalStorage } from 'Utils';
import Image from 'next/image';

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
export const GoToMarcya = styled(PrimaryButton)`
  width: auto;
  margin: 0 auto 1rem;
  z-index: 10;
`;
export const GoToAiChat = styled(SecondaryButton)`
  width: auto;
  margin: auto !important;
  z-index: 10;
`;
export const StyledLink = styled(Link)`
  z-index: 10;
`;
export const MarcyaPictureWrapper = styled.div`
  background-image: url(${() =>
    getThemeFromLocalStorage() === ThemeModes.DARK
      ? '/Images/landing/AI/HeroDarkPhone.png'
      : '/Images/landing/AI/HeroLightPhone.png'});
  background-position-y: bottom;
  background-position-x: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  @media ${deviceMin.tabletS} {
    margin-top: 8rem;
  }
`;

export const marcyaAnimation = keyframes`
to{
  transform:translateY(-5rem);
}
`;
export const MarcyaPicture = styled(Image)`
  z-index: 10;
  width: 28rem;
  height: auto;
  object-fit: contain;
  transform: translateY(-4rem);
  animation: ${marcyaAnimation} 3s infinite linear;
  animation-direction: alternate;
`;
