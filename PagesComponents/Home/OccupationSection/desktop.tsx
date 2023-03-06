import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import styled from 'styled-components';
import { CardData, componentStatements, LanguageKeys } from './const';
import { Container, Subtitle, Title, ViewAll } from './styledComponents';

const DesktopIndex: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container>
      <Side>
        <OccupationCard
          code={CardData.code}
          title={CardData.title}
          description={CardData.description}
          slug={CardData.slug}
          tasks={CardData.tasks}
        />
      </Side>
      <Side>
        <Title>{t(LanguageKeys.Title)}</Title>
        <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
        <Link href={`${locale}/occupations`}>
          <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
        </Link>
      </Side>
    </Container>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
