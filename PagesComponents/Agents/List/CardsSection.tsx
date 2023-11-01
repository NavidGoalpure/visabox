import AgentCard from 'Components/Lists/Card/Agent/Card';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import React from 'react';
import { InfiniteData } from 'react-query';
import styled from 'styled-components';

interface Props {
  agents: InfiniteData<Partial<MaraAgent>[]> | undefined;
}

const CardsSection: React.FC<Props> = ({ agents }) => {
  return (
    <Container>
      {agents?.pages?.map((agentPage) =>
        agentPage?.map((agent: Partial<MaraAgent>) => {
          return (
            <AgentCard
              key={agent._id}
              name={agent?.name?.en}
              agencies={agent?.agencies}
              slug={agent?.slug?.current || 'defensive'}
              avatar={agent?.avatar}
              layerContext={'1'}
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
