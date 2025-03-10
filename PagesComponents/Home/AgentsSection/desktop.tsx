import AgentCard from 'Components/Lists/Agent/Card';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import { componentStatements, ExampleAgent, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';
import { HTMLAttributes } from 'react';
import ExchangeCard from 'Components/Lists/Exchange/ExchangeCard';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <>
      <Container {...props}>
        <Side className='Agent-card-section'>
          <StyledCard
            name={ExampleAgent?.name?.en}
            slug={ExampleAgent?.slug?.current || ''}
            agencies={ExampleAgent?.agencies}
            layerContext='1'
            hasAvatar={ExampleAgent?.hasAvatar}
          />

          {/* <StyledExchangeCard {...Exchanges[1]} /> */}
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledCard = styled(AgentCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
