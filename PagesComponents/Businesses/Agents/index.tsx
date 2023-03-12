import AgentCard from 'Components/Business/Card/Agent/Card';
import { deviceMin } from 'Consts/device';
import { componentStatements, LanguageKeys } from './const';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import VIPAgentCard from '../../../Components/Business/Card/Agent/VIPCard';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Agents } from 'Consts/Businesses/agents';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageDesc)}</PageSubtitle>
      <VIPContainer>
        {Agents.filter((agent) => agent.isFeatured).map((agent) => {
          return (
            <VIPAgentCard
              name={agent.name}
              desc={agent.desc}
              slug={agent.slug}
            />
          );
        })}
      </VIPContainer>
      <NormalAgentContainer>
        {Agents.filter((agent) => !agent.isFeatured).map((agent) => {
          return (
            <AgentCard
              name={agent.name}
              email={agent.contact.email}
              website={agent.website}
              slug={agent.slug}
              phone={agent.contact.phone}
            />
          );
        })}
      </NormalAgentContainer>
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
const NormalAgentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
