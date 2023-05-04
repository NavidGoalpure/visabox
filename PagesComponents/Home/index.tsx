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

const HomeContent: React.FC = () => {
  const { locale } = useLocale();
  const { data: session } = useSession();
  return (
    <>
      
      <Hero />
      <Container id="section-container">
        {session && (
          <Banner
            navigateTo="/forms/client"
            desc={
              <>
                برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟ اکنون فرم ما
                را پر کنید تا وکلای مهاجرت با شما به صورت <span>رایگان</span> با
                شما در ارتباط باشند.
              </>
            }
            buttonText={"پر کردن فرم"}
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
