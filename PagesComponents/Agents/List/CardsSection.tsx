import AgentCard from 'Components/Lists/Card/Agent/Card';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import React from 'react';
import { InfiniteData } from 'react-query';
import styled from 'styled-components';

interface Props {
  agents: InfiniteData<MaraAgent[]> | undefined;
}

const CardsSection: React.FC<Props> = ({ agents }) => {
  return (
    <Container>
      {agents?.pages?.map((agentPage) =>
        agentPage?.map((agent: MaraAgent) => {
          return (
            <AgentCard
              key={agent._id}
              name={agent?.name?.en}
              email={agent?.email}
              website={agent?.website}
              maraNumber={agent?.mara_number}
              slug={agent.slug.current || 'defensive'}
            />
          );
        })
      )}
    </Container>
  );
};

export default CardsSection;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;
