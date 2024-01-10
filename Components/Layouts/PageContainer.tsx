import Footer from 'Components/Footer';
import ToasterContainer from 'Components/ToasterContainer';
import { deviceMin } from 'Consts/device';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { directionStyles } from 'Styles/Theme';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import Header from '../NavigationMenu';
import { Loading } from 'Elements/Loading';

interface Props extends HTMLAttributes<HTMLDivElement> {
  hasFooter?: boolean;
  hasMenu?: boolean;
  hasBanner?: boolean;
}

const PageContainer: React.FC<Props> = ({
  hasFooter = true,
  hasMenu = true,
  hasBanner = true,
  children,
  ...props
}) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  // this is needed in order to verify serverside rendering is over and it is on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') setHasWindow(true);
  }, []);
  if (!hasWindow)
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );

  return (
    <Container {...props}>
      <ToasterContainer />
      {hasMenu && <Header />}
      {/* تا وقتی وکیلی نداریم، اسمارت بنر دعوت به پر کردن فرم هم نداریم */}
      {/* {hasBanner &&
        (
        !isAgencyLogedIn() && (
          <SmartBanner
            navigateTo={`/${locale}/clients/request-agent`}
            desc={
              <div
                dangerouslySetInnerHTML={{
                  __html: bannerDesc,
                }}
              ></div>
            }
            buttonText={buttonText}
            stampText={stampText}
          />
        )} */}
      {/* <Survay.Root
        title={{
          en: 'How do you prefer to do the legal procedures of immigration?',
          fa: 'ترجیح میدهید برای رفتن به مهاجرت چه روشی را انتخاب کنید؟',
        }}
      >
        <MultiChoice>
          <Item
            value={'foo1'}
            text={{
              en: 'Lawer',
              fa: 'وکیل',
            }}
          />
          <Item
            value={'foo'}
            text={{
              en: 'Myself',
              fa: 'خودم',
            }}
          />
        </MultiChoice>
      </Survay.Root> */}
      <Content id='PageContainer-content'>{children}</Content>
      {hasFooter && <Footer />}
    </Container>
  );
};
export default PageContainer;
const LoadingContainer = styled.div`
  ${layer1_BG};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
const Container = styled.main`
  ${layer1_BG};
  ${directionStyles};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Content = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--max-width-page);
  margin: 0 auto;
  flex: auto;
  padding: 0.5rem;

  @media ${deviceMin.tabletS} {
    padding: 1rem;
  }
`;
