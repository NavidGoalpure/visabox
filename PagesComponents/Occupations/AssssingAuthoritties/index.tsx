import styled from 'styled-components/macro';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import CardsSection from './cardsSection';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';

const Content: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <CardsSection />
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
`;
