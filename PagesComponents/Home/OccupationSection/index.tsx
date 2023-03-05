import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { PrimaryButton } from 'Elements/LinkButton/Primary';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import styled from 'styled-components';
import {
  Layer1_HrStyle,
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { CardData, componentStatements, LanguageKeys } from './const';

const index: React.FC = () => {
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
export default index;

///////////////
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0 1rem;
`;

const Title = styled.h2`
  ${Layer1_TitleStyle}
`;
const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
  padding-top: 2rem;
`;
const ViewAll = styled(PrimaryButton)`
  width: auto;
`;
const Hr = styled.hr`
  ${Layer1_HrStyle}
`;
