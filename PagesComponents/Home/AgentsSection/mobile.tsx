import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';
import { Agents } from 'Consts/Lists/agents';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { HTMLAttributes } from 'react';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';

const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgent = Agents.find(
    (agent) => agent.featuredPlan === FeaturedPlan_Business.VIP
  );

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      {vipAgent && (
        <VIPAgentCard
          name={vipAgent?.name}
          desc={vipAgent?.desc}
          slug={vipAgent?.slug}
          layerContext='1'
          avatar={vipAgent?.avatar || `/Images/placeholder.jpeg`}
        />
      )}
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

      <StyledLink href={`${locale}/lists/agents`}>
        <ViewAll id={`home_all-agents_${locale}`}>
          {t(LanguageKeys.CTA)}
        </ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;
