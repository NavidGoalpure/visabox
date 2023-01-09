import styled from 'styled-components/macro';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import CardsSection from './cardsSection';
import { PageSubtitleStyle, PageTitleStyle } from 'Styles/Theme/Page';

const Content: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <Subtitle>{t(LanguageKeys.PageTitle)}</Subtitle>
      <CardsSection />
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
  margin-bottom: 1rem;
`;
const Subtitle = styled.h2`
  ${PageSubtitleStyle}
`;
