import { useLocale } from 'Hooks/useLocale';
import { Languages, Locations } from 'Interfaces';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { MaraAgency, MaraAgent } from 'Interfaces/Database/Lists/agents';

export function isAgentActiveInLocation({
  maraAgencies,
  location,
}: {
  maraAgencies: MaraAgency[];
  location: Locations;
}): boolean {
  // Loop through the agencies of the MaraAgent
  for (const agency of maraAgencies) {
    // Check if the agency's country matches the provided location
    if (agency.country.toLowerCase() === location.toLowerCase()) {
      // If there's a match, the agent is considered active in that location
      return true;
    }
  }

  // If no matching agency is found for the location, the agent is not active there
  return false;
}

export function getSmartVIPAgent(agents: MaraAgent[]): MaraAgent[] {
  const { locale } = useLocale();
  const result = agents.filter((agent) => {
    if (locale === Languages.fa) {
      if (
        (agent.plan === FeaturedPlan_Business.VIP ||
          agent.plan === FeaturedPlan_Business.FULL_DATA) &&
        isAgentActiveInLocation({
          maraAgencies: agent?.agencies,
          location: Locations.iran,
        })
      ) {
        return agent;
      }
    } else if (locale === Languages.en) {
      if (
        (agent.plan === FeaturedPlan_Business.VIP ||
          agent.plan === FeaturedPlan_Business.FULL_DATA) &&
        !isAgentActiveInLocation({
          maraAgencies: agent?.agencies,
          location: Locations.iran,
        })
      ) {
        return agent;
      }
    }
  });
  return result;
}

export function getSmartSimpleAgent(agents: MaraAgent[]): MaraAgent[] {
  const { locale } = useLocale();
  const result = agents.filter((agent) => {
    if (locale === Languages.fa) {
      if (
        agent.plan === FeaturedPlan_Business.SIMPLE &&
        isAgentActiveInLocation({
          maraAgencies: agent?.agencies,
          location: Locations.iran,
        })
      ) {
        return agent;
      }
    } else if (locale === Languages.en) {
      if (
        agent.plan === FeaturedPlan_Business.SIMPLE &&
        !isAgentActiveInLocation({
          maraAgencies: agent?.agencies,
          location: Locations.iran,
        })
      ) {
        return agent;
      }
    }
  });
  return result;
}
