import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';
import { Agents } from 'Consts/Lists/agents';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';
import { HTMLAttributes, useEffect } from 'react';
import { GsapSectionAnimation_1 } from '../utils';
import { FeaturedPlan_Business } from 'Interfaces/Lists';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgent = Agents.find(
    (agent) => agent.featuredPlan === FeaturedPlan_Business.VIP
  );
  useEffect(() => {
    GsapSectionAnimation_1('Agent');
  }, []);
  return (
    <>
      <Container {...props}>
        <Side className='Agent-card-section'>
          {vipAgent && (
            <StyledCard
              name={vipAgent?.name}
              desc={vipAgent?.desc}
              slug={vipAgent?.slug}
              layerContext='1'
              avatar={vipAgent?.avatar || "/Images/placeholder.jpeg"}
            />
          )}
        </Side>
        <Side className='Agent-text-section'>
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <StyledLink href={`${locale}/lists/agents`}>
            <ViewAll id={`home_all-agents_${locale}`}>
              {t(LanguageKeys.CTA)}
            </ViewAll>
          </StyledLink>
        </Side>
      </Container>
    </>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
`;
const StyledCard = styled(VIPAgentCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
