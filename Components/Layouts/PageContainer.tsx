import Footer from 'Components/Footer';
import ToasterContainer from 'Components/ToasterContainer';
import { deviceMin } from 'Consts/device';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { directionStyles } from 'Styles/Theme';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import Header from '../NavigationMenu';
import { Loading } from 'Elements/Loading/Loading';
import SmartBanner from 'Components/SmartBanner';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { setSessionStorage } from 'Utils';
import { SessionStorageKeys } from 'Interfaces';
import { useRouter } from 'next/router';
import LazyLoadComponentUi from 'Elements/LazyLoadComponentUi';
import { useLocale } from 'Hooks/useLocale';
import { stringify } from 'querystring';

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
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  const { locale } = useLocale();
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
      {/* navid فعلا باید  این قسمت کامنت باشه تابفهمیم چرا فرم هایی که پر میشن نشون داده نمیشن */}
      {/* {hasBanner && (
        <SmartBanner
          navigateTo={`/${locale}/clients/point-calculator`}
          desc={
            <div
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.BannerDesc),
              }}></div>
          }
          stampText={t(LanguageKeys.StampText)}
          buttonText={t(LanguageKeys.BannerButtonText)}
          onClose={() =>
            setSessionStorage({
              key: SessionStorageKeys.IS_SMART_BANNER_CLOSE,
              value: "true",
            })
          }
        />
      )} */}
      <Content id='PageContainer-content'>{children}</Content>
      <LazyLoadComponentUi>{hasFooter && <Footer />}</LazyLoadComponentUi>
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
