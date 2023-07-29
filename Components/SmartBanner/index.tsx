import MaraBgAnimation from 'Components/MaraBgAnimation';
import { deviceMin } from 'Consts/device';
import { SecondaryButton } from 'Elements/Button/Secondary';
import { LocalStorageKeys } from 'Interfaces';
import { useRouter } from 'next/router';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { MdNavigateNext } from 'react-icons/md';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style, Headline7Style } from 'Styles/Typo';
import { getLocalStorage, setLocalStorage } from 'Utils';
import BannerStamp from './Images/BannerStamp.svg';
interface Props extends HTMLAttributes<HTMLDivElement> {
  navigateTo: string;
  desc: ReactNode;
  buttonText: string;
  stampText?: string;
}
const SmartBanner: React.FC<Props> = ({ navigateTo, desc, buttonText,stampText }) => {
  const router = useRouter();
  const [isBannerClosed, setIsBannerClosed] = useState(true);
  useEffect(() => {
    if (
      getLocalStorage(LocalStorageKeys.Client_IsFormBannerClosed) === 'true'
    ) {
      setIsBannerClosed(true);
    } else {
      setIsBannerClosed(false);
    }
  }, []);
  return (
    <Container isBannerClosed={isBannerClosed}>
      {stampText && <Stamp
        dangerouslySetInnerHTML={{ __html: stampText }}
      >
      </Stamp>}
      <Wrapper>
        {' '}
        <MaraBgAnimation
          animationSpeed={60}
          DarkPrimaryColor={'var(--color-primary3)'}
          LightPrimaryColor={'var(--color-primary3)'}
          LightSecondaryColor={'transparent'}
        >
          <Content>
            <Title>{desc}</Title>{' '}
            <Button onClick={() => router.push(navigateTo)} icon={<NextIcon />}>
              {buttonText}
            </Button>
            <CloseIconWrapper
              onClick={() => {
                setLocalStorage({
                  key: LocalStorageKeys.Client_IsFormBannerClosed,
                  value: 'true',
                });
                setIsBannerClosed(true);
              }}
            >
              <CloseIcon />
            </CloseIconWrapper>
          </Content>
        </MaraBgAnimation>
      </Wrapper>
    </Container>
  );
};
export default SmartBanner;

const Container = styled.div<{ isBannerClosed: boolean }>`
  position: relative;
  width: 100%;
  ///////////
  ${({ isBannerClosed }) => isBannerClosed && `display:none;`}///////
`;

const Stamp = styled.div`
span {
color: color: var(--color-secondary1);;
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
width: 112px;
height: 112px;
bottom: -4rem;
left: -0.5rem;
z-index: 1;
font-weight: 900;
color: var(--color-secondary1);
@media ${deviceMin.tabletS} {
  ${Headline7Style};
  left: 5rem;
  width: 112px;
  height: 112px;
  font-weight: 900;
  bottom: -4rem;
}
`;
const NextIconDirectionStyle = theme('languageDirection', {
  ltr: css``,
  rtl: css`
    transform: rotate(180deg);
  `,
});

const Wrapper = styled.div`
  background: var(--color-primary1);
  text-align: center;
  position: relative;
  width: 100%;
  height: max-content;
  z-index: 0;
  overflow: hidden;
  :before {
    content: '';
    width: 20%;
    height: 50%;
    background: var(--color-primary3);
    opacity: 0.5;
    filter: blur(100px);
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }
  :after {
    content: '';
    width: 20%;
    height: 50%;
    background: var(--color-primary3);
    opacity: 0.5;
    filter: blur(100px);
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0.3rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(5px);
  @media ${deviceMin.tabletS} {
    flex-direction: row;
    padding: 0.3rem;
  }
`;
const Title = styled.h2`
  ${Headline5Style};
  color: var(--color-gray13);
  span {
    color: var(--color-primary5);
  }
`;
const Button = styled(SecondaryButton)`
  width: auto;
`;
export const NextIcon = styled(MdNavigateNext)`
  ${NextIconDirectionStyle};
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;
const CloseIconWrapper = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 3%;
  right: 2%;
  @media ${deviceMin.tabletS} {
    top: 20%;
    right: 5%;
  }
`;
const CloseIcon = styled(IoCloseOutline)`
  color: white;
  width: 100%;
  height: 100%;
`;
