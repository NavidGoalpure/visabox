import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { PrimaryButton } from 'Elements/LinkButton/Primary';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces';
import { Slug } from 'Interfaces/Fields';
import styled from 'styled-components';
import {
  Layer1_HrStyle,
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';

const index: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const CardData = {
    code: 133111,
    title: {
      en: 'Construction Project Manager',
    } as MultiLanguageText,
    description: {
      en: 'Plans, organises, directs, controls and coordinates construction of civil engineering and building projects, and the physical and human resources involved in the construction process. Registration or licensing may be required.',
    } as MultiLanguageText,
    slug: { current: '/occupations/construction-project-manager' } as Slug,
    tasks: {} as MultiLanguageTextArray,
  };
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
      <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
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
