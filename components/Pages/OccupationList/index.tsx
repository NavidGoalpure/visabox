import styled from 'styled-components/macro';
import { useTranslation } from '@hooks/useTraslation';
import { componrntStatements, PageKeys } from './Const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { PageTitleStyle } from '@components/Layouts/StyledComponents';

const Content: React.FC = () => {
  const { t } = useTranslation(componrntStatements);
  return (
    <>
      <PageTitle>{t(PageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search />
      <CardsSection />
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
