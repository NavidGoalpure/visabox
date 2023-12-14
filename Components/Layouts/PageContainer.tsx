import SmartBanner from "Components/SmartBanner";
import Footer from "Components/Footer";
import ToasterContainer from "Components/ToasterContainer";
import { deviceMin } from "Consts/device";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { Languages, LocalStorageKeys } from "Interfaces";
import { useSession } from "next-auth/react";
import { getClientDetail } from "Queries/client";
import React, { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { directionStyles } from "Styles/Theme";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import { ClientQueryKeys } from "Utils/query/keys";
import Header from "../NavigationMenu";
import { componentStatements, LanguageKeys } from "./const";
import { Loading } from "Elements/Loading";
import { isAgencyLogedIn, isClientLogedIn, isLogout } from "Utils/user";
import CountryModal from "./CountryModal";
import { Client, ClientCompletedForms } from "Interfaces/Database/Client";
import { ClientError } from "@sanity/client";

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
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const buttonText = t(LanguageKeys.BannerButtonText);
  const stampText = t(LanguageKeys.StampText);
  const bannerDesc = t(LanguageKeys.BannerDesc);
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  const [hasClientCompletedForm, setHasClientCompletedForm] =
    useState<boolean>(true);
  const [hasCountryInDatabase, setHasCountryInDatabase] =
    useState<boolean>(true);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `name,
                  completed_forms,
                  country`;
  const { data, isLoading, isIdle } = useQuery<
    { client: Client[] },
    ClientError
  >(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    },
    {
      enabled: !!session?.user?.email && isClientLogedIn(),
    }
  );
  // the banner is shown when the user has not completed the request-agent form
  useEffect(() => {
    if (
      !isLoading &&
      !isIdle &&
      data?.client?.[0]?.completed_forms?.filter(
        (form) => form.forms === ClientCompletedForms.AgentForm
      ).length === 1
    ) {
      setHasClientCompletedForm(true);
    } else if (
      !isLoading &&
      !isIdle &&
      data?.client?.[0]?.completed_forms?.filter(
        (form) => form.forms === ClientCompletedForms.AgentForm
      ).length === 0
    )
      setHasClientCompletedForm(false);
    if (!isLoading && !isIdle && !!data?.client?.[0]?.country) {
      setHasCountryInDatabase(true);
    } else if (!isLoading && !isIdle && !data?.client?.[0]?.country) {
      setHasCountryInDatabase(false);
    }
  }, [isLoading, isIdle, data]);
  // this is needed in order to verify serverside rendering is over and it is on the client side
  useEffect(() => {
    if (typeof window !== "undefined") setHasWindow(true);
  });
  return (
    <Container {...props}>
      {hasWindow ? (
        <>
          {" "}
          <ToasterContainer />
          {(!hasCountryInDatabase || isLogout()) && <CountryModal />}
          {hasMenu && <Header />}
          {hasBanner &&
            (!hasClientCompletedForm || !session) &&
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
            )}
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
          <Content id="PageContainer-content">{children}</Content>
          {hasFooter && <Footer />}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};
export default PageContainer;
const Container = styled.main`
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
  ${layer1_BG};
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
