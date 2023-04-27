import AgencyCard from 'Components/Lists/Card/Agency/Card';
import { deviceMin } from 'Consts/device';
import { componentStatements, LanguageKeys } from './const';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import VIPAgencyCard from '../../../Components/Lists/Card/Agency/VIPCard';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { AGENCYS } from 'Consts/Lists/agency';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageDesc)}</PageSubtitle>
      <VIPContainer>
        {AGENCYS.filter((agency) => agency.featuredPlan).map((agency) => {
          return (
            <VIPAgencyCard
              key={agency.slug}
              name={agency.name}
              desc={agency.desc}
              slug={agency.slug}
              logoUrl={agency.logoUrl}
            />
          );
        })}
      </VIPContainer>
      <NormalAgencysContainer>
        {AGENCYS.filter((agency) => !agency.featuredPlan).map((agency) => {
          return (
            <AgencyCard
              key={agency.slug}
              name={agency.name}
              email={agency.contact.email}
              website={agency.contact.website}
              slug={agency.slug}
              phone={agency.contact.phone}
            />
          );
        })}
      </NormalAgencysContainer>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const PageSubtitle = styled.h4`
  ${Layer1_SubtitleStyle};
`;
const VIPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 5rem;
`;
const NormalAgencysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
