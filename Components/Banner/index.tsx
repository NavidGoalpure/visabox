import MaraBgAnimation from 'Components/MaraBgAnimation';
import { deviceMin } from 'Consts/device';
import { PrimaryButton } from 'Elements/Button/Primary';
import { useRouter } from 'next/router';
import { HTMLAttributes, ReactNode } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import BannerStamp from './Images/BannerStamp.svg';
import {
  Headline4Style,
  Headline5Style,
  Headline6Style,
  Headline7Style,
} from 'Styles/Typo';
import { SecondaryButton } from 'Elements/Button/Secondary';
interface Props extends HTMLAttributes<HTMLDivElement> {
  navigateTo: string;
  desc: ReactNode;
  buttonText: string;
  stampText?: string;
}
const Banner: React.FC<Props> = ({
  navigateTo,
  desc,
  buttonText,
  stampText,
}) => {
  const router = useRouter();
  return (
    <Container>
      {stampText && (
        <Stamp dangerouslySetInnerHTML={{ __html: stampText }}></Stamp>
      )}
      <Wrapper>
        <Content>
          <Title>{desc}</Title>{' '}
          <Button onClick={() => router.push(navigateTo)} icon={<NextIcon />}>
            {buttonText}
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Banner;
const NextIconDirectionStyle = theme('languageDirection', {
  ltr: css``,
  rtl: css`
    transform: rotate(180deg);
  `,
});

const Container = styled.div`
  position: relative;
`;

const Stamp = styled.div`
  span {
    color: var(--color-secondary1);
  }
  ${Headline7Style};
  rotate: -10deg;
  scale: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  text-align: center;
  position: absolute;
  background-image: url(${BannerStamp});
  background-repeat: no-repeat;
  background-size: contain;
  width: 128px;
  height: 128px;
  bottom: -2rem;
  left: -0.5rem;
  z-index: 1;
  font-weight: 900;
  color: var(--color-secondary1);
  @media ${deviceMin.tabletS} {
    ${Headline7Style};
    scale: 1;
    left: 5rem;
    width: 128px;
    height: 128px;
    font-weight: 900;
  }
`;
///////////////////////////
const wrapperBG = theme('mode', {
  light: css`
    background: var(--color-gray7);
  `,
  dark: css`
    background: var(--color-primary2);
  `,
});
const Wrapper = styled.div`
  ${wrapperBG}
  text-align: center;
  position: relative;
  top: -2rem;
  left: 0;
  width: 100%;
  height: max-content;
  z-index: 0;
  overflow: hidden;
  :before {
    content: '';
    width: 20%;
    height: 50%;
    background: var(--color-gray7);
    opacity: 0.5;
    filter: blur(100px);
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
  :after {
    content: '';
    width: 20%;
    height: 50%;
    background: var(--color-gray7);
    opacity: 0.5;
    filter: blur(100px);
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
`;
const Content = styled.div`
  display: flex;
  padding: 1.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  backdrop-filter: blur(5px);
  @media ${deviceMin.tabletS} {
    padding: 1.5rem 2rem;
  }
`;
const Title = styled.h2`
  ${Headline5Style};
  color: var(--color-secondary3);
  font-weight: bold;
  @media ${deviceMin.tabletS} {
    width: 80%;
  }
  p {
    ${Headline5Style};
    font-weight: bold;

    color: var(--color-gray13);
  }
  span {
    color: var(--color-secondary4);
  }
`;
const Button = styled(SecondaryButton)`
  width: fit-content;
`;

export const NextIcon = styled(MdNavigateNext)`
  ${NextIconDirectionStyle};
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;
