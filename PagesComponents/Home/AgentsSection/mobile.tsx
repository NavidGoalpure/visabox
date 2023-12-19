import AgentCard from 'Components/Lists/Agent/Card';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { HTMLAttributes } from 'react';
import { componentStatements, ExampleAgent, LanguageKeys } from './const';
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

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      <AgentCard
        name={ExampleAgent?.name?.en}
        slug={ExampleAgent?.slug?.current || ''}
        agencies={ExampleAgent?.agencies}
        layerContext='1'
      />
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
