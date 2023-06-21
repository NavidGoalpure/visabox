import { Locations } from 'Interfaces';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { Agent } from 'Interfaces/Database/Lists/agents';

export function getSmartVIPAgent(agents: Agent[]): Agent[] {
  const result = agents.filter((agent) => {
    if (
      (agent.featuredPlan === FeaturedPlan_Business.VIP ||
        agent.featuredPlan === FeaturedPlan_Business.FULL_DATA) &&
      agent.locations.includes(Locations.fa)
    ) {
      return agent;
    }
  });
  return result;
}

export function getSmartSimpleAgent(agents: Agent[]): Agent[] {
  const result = agents.filter((agent) => {
    if (
      agent.featuredPlan === FeaturedPlan_Business.SIMPLE &&
      agent.locations.includes(Locations.fa)
    ) {
      return agent;
    }
  });
  return result;
}
