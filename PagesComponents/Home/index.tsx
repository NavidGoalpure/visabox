import Hero from "./Hero";
import AgentsSection from "./AgentsSection";
import OccupationSection from "./OccupationSection";
import AgencysSection from "./AgencysSection";
import ExchangesSection from "./ExchangesSection";
import SocialsSection from "./SocialsSection";
import NattiesSection from "./NattiesSection";
import styled from "styled-components";

const HomeContent: React.FC = () => {
  
  return (
    <>
      <Hero />
      <Container id="section-container">
        <AgentsSection className="section" />
        <OccupationSection className="section" />
        <AgencysSection className="section" />
        <ExchangesSection className="section" />
        <SocialsSection className="section" />
        <NattiesSection className="section" />
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
