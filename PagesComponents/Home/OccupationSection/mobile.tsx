import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import { CardData, componentStatements, LanguageKeys } from './const';
import { Container, Subtitle, Title, ViewAll } from './styledComponents';

const MobileIndex: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container>
      <Title>{t(LanguageKeys.Title)}</Title>
      <OccupationCard
        code={CardData.code}
        title={CardData.title}
        description={CardData.description}
        slug={CardData.slug}
        tasks={CardData.tasks}
      />
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
      <Link href={`${locale}/occupations`}>
        <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
      </Link>
    </Container>
  );
};
export default MobileIndex;

///////////////
