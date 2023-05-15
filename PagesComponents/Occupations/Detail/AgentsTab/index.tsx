import styled from 'styled-components';
import { Agents } from 'Consts/Lists/agents';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';

const AgentsComponent: React.FC = () => {
  const importantAgents = Agents.filter(
    (agent) =>
      agent?.featuredPlan === FeaturedPlan_Business.FULL_DATA ||
      agent?.featuredPlan === FeaturedPlan_Business.VIP
  );
  return (
    <>
      <Container>
        {importantAgents?.map((agent) => (
          <VIPAgentCard
            name={agent?.name}
            desc={agent?.desc}
            slug={agent.slug}
            layerContext='2'
            avatar={agent.avatar || '/Images/placeholder.jpeg'}
          />
        ))}
      </Container>
    </>
  );
};

export default AgentsComponent;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;
  padding: 2rem;
`;
