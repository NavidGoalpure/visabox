import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { HTMLAttributes } from 'react';
import { CardData, componentStatements, LanguageKeys } from './const';
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
      <OccupationCard
        code={CardData.code}
        title={CardData.title}
        description={CardData.description}
        slug={CardData.slug}
        tasks={CardData.tasks}
      />
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
      <StyledLink href={`${locale}/occupations`}>
        <ViewAll id={`home_all-occupations_${locale}`}>
          {t(LanguageKeys.CTA)}
        </ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;

///////////////
