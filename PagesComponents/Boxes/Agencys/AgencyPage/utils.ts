import { Agents } from "Consts/Businesses/agents";
import { VipSocialMedias } from "Consts/Socials";
import { Agency } from "Interfaces/Businesses/agency";

export const getAgencyAgents = (ChosenAgency?: Agency) => {
  const agents = ChosenAgency?.agentsId?.map((agentId) => {
    return Agents.filter((agent) => agent.id === agentId)[0];
  });
  return agents;
};
export const getAgencySocials = (ChosenAgency?: Agency) => {
  const agents = ChosenAgency?.socialsId?.map((socialId) => {
    return VipSocialMedias.filter((social) => social.id === socialId)[0];
  });
  if (agents?.[0] !== undefined) return agents;
  return null
};
