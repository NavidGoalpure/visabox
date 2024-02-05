import { device, deviceMin } from 'Consts/device';
import { useCallback, useRef } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { componentStatements, LanguageKeys, tsParticleOption } from './const';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Hero: React.FC = () => {
  /////////
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesContainer = useRef(null);
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container id='hero-container' ref={particlesContainer}>
      <StyledParticles
        container={particlesContainer}
        id='tsparticles'
        init={particlesInit}
        options={tsParticleOption}
      />

      <ContentContainer>
        <Title role='heading' aria-level={1}>
          {t(LanguageKeys.Title)}
        </Title>
        <Subtitle
          dangerouslySetInnerHTML={{ __html: t(LanguageKeys.Subtitle) }}
          role='heading'
          aria-level={2}
        />
      </ContentContainer>
      <ImageContainer>
        <ImageCards
          src={'/Images/australia-pictures.webp'}
          alt='Picture of the australia'
          fill
          priority
          sizes={`${device.mobileL} 0vw, ${device.laptopM} 33vw`}
        />
      </ImageContainer>
      <Blured1 />
      <Blured2 />
    </Container>
  );
};
export default Hero;

///////////////
const BorderColor_Mobile = theme('mode', {
  light: css`
    background: linear-gradient(360deg, #09c0b0 26.13%, #00ebd6 100%);
  `,
  dark: css`
    background: #282828;
  `,
});
const BorderColor_Desktop = theme('mode', {
  light: css`
    background: linear-gradient(103.22deg, #1bada1 0.64%, #00ebd6 77.23%);
  `,
  dark: css`
    background: #282828;
  `,
});
const Container = styled.section`
  ${BorderColor_Mobile}
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(100vh - 3rem);
  overflow: hidden;
  @media ${deviceMin.tabletL} {
    ${BorderColor_Desktop}
    height: calc(100vh - 5rem);
    flex-direction: row;
    justify-content: left;
  }
`;

const Particles = dynamic(() => import('react-tsparticles'), {
  ssr: false,
});
const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  display: none;
  height: inherit;
  position: relative;
  width: 50%;
  @media ${deviceMin.laptopM} {
    display: initial;
  }
`;
const ImageCards = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  object-fit: contain;
  object-position: right;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${deviceMin.laptopM} {
    width: 50%;
    margin-left: 2%;
  }
`;

///////////////////////
const titleFont = theme('mode', {
  light: css`
    text-shadow: 0px 2px 3px var(--color-gray5);
  `,
  dark: css``,
});

////////////
const titleColor = theme('mode', {
  light: css`
    color: var(--color-secondary3);
  `,
  dark: css`
    color: var(--color-primary4);
  `,
});
const Title = styled.h1`
  ${titleFont}
  ${titleColor}
  font-weight: 700;
  font-size: 52px;
  line-height: 0;
  letter-spacing: -0.5px;
  width: 100%;
  text-align: center;
  @media ${deviceMin.mobileL} {
    font-size: 54px;
    line-height: 54px;
  }

  @media ${deviceMin.laptopM} {
    font-size: 74px;
    max-width: 33rem;
  }
`;
///////////

///////////////////////////////
const subtitleColor = theme('mode', {
  light: css`
    color: var(--color-secondary3);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const Subtitle = styled.div`
  color: var(--color-gray13);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  padding: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
  span {
    ${subtitleColor}
  }
  @media ${deviceMin.tabletS} {
    font-size: 34px;
    line-height: 38px;
  }
  @media ${deviceMin.laptopXS} {
    width: 70%;
  }
  @media ${deviceMin.laptopM} {
    width: 33rem;
    font-size: 38px;
    line-height: 42px;
  }
`;
const Blured1 = styled.div`
  position: absolute;
  width: 80px;
  height: 70px;
  right: 40px;
  top: 78px;
  background: rgba(27, 173, 161, 0.5);
  filter: blur(80px);
`;
const Blured2 = styled(Blured1)`
  bottom: 5rem;
  left: 4rem;
  top: unset;
  right: unset;
`;
