import { deviceMin } from 'Consts/device';
import { useCallback, useRef } from 'react';

import type { Container as PartcleContainer, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled, { css, useTheme } from 'styled-components';
import theme from 'styled-theming';
import { componentStatements, LanguageKeys, tsParticleOption } from './const';
import heroSvg from './airplane.svg';
import { layer1_TextColor } from 'Styles/Theme/Layers/layer1/theme';
import dynamic from 'next/dynamic';

const Hero: React.FC = () => {
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
      <img src={heroSvg} />
      {/* <img s */}
      <Title style={{ marginTop: '-5rem' }}>{t(LanguageKeys.Title1)}</Title>
      <Title>{t(LanguageKeys.Title2)}</Title>
      <Title3>{t(LanguageKeys.Title3)}</Title3>
      <Subtitle
        dangerouslySetInnerHTML={{ __html: t(LanguageKeys.Subtitle) }}
      />
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 2rem;
  height: calc(100vh - 3rem);
  overflow: hidden;
  @media ${deviceMin.tabletL} {
    ${BorderColor_Desktop}
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

///////////////////////
const titleFont = theme('mode', {
  light: css`
    text-shadow: 0px 2px 3px var(--color-gray5);
  `,
  dark: css``,
});
const Title = styled.h2`
  ${titleFont}
  display: grid;
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 95px;
  letter-spacing: -0.5px;
  width: 100%;
  text-align: center;
  color: white;

  span {
    margin-inline-start: 0.5rem;
  }
  @media ${deviceMin.mobileL} {
    font-size: 61px;
  }
`;
///////////
const title3Color = theme('mode', {
  light: css`
    color: var(--color-secondary3);
  `,
  dark: css`
    color: var(--color-primary4);
  `,
});
const Title3 = styled(Title)`
  ${title3Color}
`;
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
  ${layer1_TextColor}
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
  span {
    ${subtitleColor}
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
