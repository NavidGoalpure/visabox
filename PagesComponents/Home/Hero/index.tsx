import { deviceMin } from 'Consts/device';
import { useCallback, useRef } from 'react';
import Particles from 'react-tsparticles';
import type {
  SizeMode,
  ISourceOptions,
  Container as PartcleContainer,
  Engine,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled, { css, useTheme } from 'styled-components';
import theme from 'styled-theming';
import { componentStatements, LanguageKeys, tsParticleOption } from './const';
import heroSvg from './airplane.svg';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: PartcleContainer | undefined) => {
      await console.log(container);
    },
    []
  );

  const particlesContainer = useRef(null);
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container id='hero-container' ref={particlesContainer}>
      <StyledParticles
        container={particlesContainer}
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={tsParticleOption}
      />
      <img src={heroSvg} />
      {/* <img s */}
      <Title style={{ marginTop: '-5rem' }}>{t(LanguageKeys.Title1)}</Title>
      <Title>{t(LanguageKeys.Title2)}</Title>
      <Title3>{t(LanguageKeys.Title3)}</Title3>
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
const Container = styled.div`
  ${BorderColor_Mobile}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 2rem;
  height: 100vh;
  @media ${deviceMin.tabletL} {
    ${BorderColor_Desktop}
  }
`;
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
