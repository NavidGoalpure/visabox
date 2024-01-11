import MaraBgAnimation from 'Components/MaraBgAnimation';
import { deviceMin } from 'Consts/device';
import { SecondaryButton } from 'Elements/Button/Secondary';
import { LocalStorageKeys, SessionStorageKeys } from 'Interfaces';
import { useRouter } from 'next/router';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { MdNavigateNext } from 'react-icons/md';
import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style, Headline7Style } from 'Styles/Typo';
import { getSessionStorage } from 'Utils';
import BannerStamp from './Images/BannerStamp.svg';
interface Props extends HTMLAttributes<HTMLDivElement> {
  navigateTo: string;
  desc: ReactNode;
  buttonText: string;
  stampText?: string;
  onClose: () => void;
}
const SmartBanner: React.FC<Props> = ({
  onClose,
  navigateTo,
  desc,
  buttonText,
  stampText,
}) => {
  const router = useRouter();
  const [isBannerClosed, setIsBannerClosed] = useState(true);
  useEffect(() => {
    if (getSessionStorage(SessionStorageKeys.isCloseMarcyaBanner) === 'true') {
      setIsBannerClosed(true);
    } else {
      setIsBannerClosed(false);
    }
  }, []);
  if (isBannerClosed) return null;
  return (
    <Container>
      {stampText && (
        <Stamp dangerouslySetInnerHTML={{ __html: stampText }}></Stamp>
      )}
      <Wrapper>
        <ContentWrapper>
          <Content>
            <Title>{desc}</Title>
          </Content>
          <Button onClick={() => router.push(navigateTo)} icon={<NextIcon />}>
            {buttonText}
          </Button>
          <CloseIconWrapper
            onClick={() => {
              onClose();
              setIsBannerClosed(true);
            }}
          >
            <CloseIcon />
          </CloseIconWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};
export default SmartBanner;

const Container = styled.div`
  position: relative;
  width: 100%;
  ///////////
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
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 2rem 0.3rem 1rem;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   backdrop-filter: blur(5px);
//   @media ${deviceMin.tabletS} {
//     flex-direction: row;
//     padding: 0.3rem;
//   }
// `;
const Content = styled.div`
  display: inline-block;
  margin-inline-end: 2rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  width: var(--max-width-page);
  justify-content: center;
  margin: 0 auto;
  min-height: 4rem;
  align-items: center;
  z-index: 10;
  position: relative;
  width: var(--max-width-page);
  margin: 0 auto;
`;
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;
const blinking = keyframes`
  0% {
    border-right-color: transparent;
  }
  50% {
    border-right-color: var(--color-gray10);
  }
  100% {
    border-right-color: transparent;
  }
`;

const Title = styled.p`
  ${Headline5Style};
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: ${typing} 3s steps(30, end) forwards, ${blinking} 1s infinite;
  color: var(--color-gray13);
  padding: 0 0.5rem;
  border-inline-end: 2px solid;
  span {
    color: var(--color-primary5);
  }
`;

const Button = styled(SecondaryButton)`
  width: auto;block
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
