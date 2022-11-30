import styled from 'styled-components/macro';
import { useTranslation } from 'hooks/useTraslation';
import { componentStatements, PageKeys } from './Const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { Occupation } from 'interfaces/Documents/Occupation';
import { PageTitleStyle } from 'Styles/Theme/Page';

interface Props {
  occupations: Occupation[];
}
const Content: React.FC<Props> = ({ occupations }) => {
  const { t } = useTranslation(componentStatements);
  return (
    <>
      <PageTitle>{t(PageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search />
      <CardsSection occupations={occupations} />
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
