import Hero from "./Hero";
import AgentsSection from "./AgentsSection";
import OccupationSection from "./OccupationSection";
import AgencysSection from "./AgencysSection";
import ExchangesSection from "./ExchangesSection";
import SocialsSection from "./SocialsSection";
import NattiesSection from "./NattiesSection";
import styled from "styled-components";
import { useLocale } from "Hooks/useLocale";
import { Languages } from "Interfaces";
import Banner from "../../Components/Banner";
import { useSession } from "next-auth/react";
import { componentStatements, LanguageKeys } from "./const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";

const HomeContent: React.FC = () => {
  const { locale } = useLocale();
  const { data: session } = useSession();
  const {t} =useStaticTranslation(componentStatements)
  return (
    <>
      
      <Hero />
      <Container id="section-container">
        {session && (
          <Banner
            navigateTo="/forms/client"
            desc={
              <div dangerouslySetInnerHTML={{__html:t(LanguageKeys.BannerDesc)}}>
              </div>
            }
            buttonText={t(LanguageKeys.BannerButtonText)}
            type="TYPE1"
          />
        )}
        <OccupationSection className="section" />
        <AgencysSection className="section" />
        <NattiesSection className="section" />
        <AgentsSection className="section" />
        <ExchangesSection className="section" />
        {locale === Languages.fa && <SocialsSection className="section" />}
      </Container>
    </>
  );
};
export default HomeContent;

///////////////
const Container = styled.div`
  position: relative;
  margin-top: 2rem;
`;
