import { deviceMin } from 'Consts/device';
import { useCallback,  useRef } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { componentStatements, LanguageKeys, tsParticleOption } from './const';
import planeMobile from './planeMobile.svg';
import planeDesktop from './planeDesktop.svg';
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
      <ImageContainer>
        <ImageCards
          src={'/Images/australia-pictures.webp'}
          alt='Picture of the australia'
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          fill
        />
      </ImageContainer>
      <ContentContainer>
        <PlaneMobile src={planeMobile} />
        <PlaneDesktop src={planeDesktop} />
        <TitleContainer>
          <Title>{t(LanguageKeys.Title1)}</Title>
          <Title>{t(LanguageKeys.Title2)}</Title>
          <Title3>{t(LanguageKeys.Title3)}</Title3>
        </TitleContainer>
        <Subtitle
          dangerouslySetInnerHTML={{ __html: t(LanguageKeys.Subtitle) }}
        />
      </ContentContainer>
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
const PlaneMobile = styled.img`
  display: initial;
  max-width: 30rem;
  margin: 0 auto;
  @media ${deviceMin.laptopM} {
    display: none;
  }
`;
const PlaneDesktop = styled.img`
  display: none;
  @media ${deviceMin.laptopM} {
    display: initial;
    max-width: 30rem;
    // margin-inline-end: -5rem;
    margin-left: auto;
  }
  @media ${deviceMin.laptopL} {
    // margin-inline-end: -5rem;
  }
`;
///////////////////////
const titleFont = theme('mode', {
  light: css`
    text-shadow: 0px 2px 3px var(--color-gray5);
  `,
  dark: css``,
});
const TitleContainer = styled.div`
  margin-top: -5rem;
  @media ${deviceMin.laptopM} {
    margin-top: -7.5rem;
  }
`;
const Title = styled.h2`
  ${titleFont}
  display: grid;
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 72px;
  letter-spacing: -0.5px;
  width: 100%;
  text-align: center;
  color: white;

  span {
    margin-left: 0.5rem;
  }
  @media ${deviceMin.mobileL} {
    font-size: 61px;
  }
  @media ${deviceMin.laptopM} {
    max-width: 33rem;
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
  color:var(--color-gray13);
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
  @media ${deviceMin.laptopXS} {
    width: 70%;
  }
  @media ${deviceMin.laptopM} {
    width: 33rem;
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
