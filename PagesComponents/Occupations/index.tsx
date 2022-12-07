import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { PageTitleStyle } from 'Styles/Theme/Page';
import { useListData } from './useListData';
import { useLastOccupationData } from './useLastOccupationData';
import { getHasNextPage, getLastFechedOccupation } from './utils';
import { SmartButton } from './SmartButton';
import { ErrorOrContent } from './ErrorOrContent';
import styled from 'styled-components/macro';

const Content: React.FC = () => {
  const { occupations, isFetching, fetchNextPage, isError } = useListData();
  const { lastOccupation } = useLastOccupationData();
  const { t } = useStaticTranslation(componentStatements);
  //
  const lastFechedOccupation = getLastFechedOccupation(occupations);
  //
  const hasNextPage = getHasNextPage({ lastOccupation, lastFechedOccupation });
  //
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search />
      <ErrorOrContent
        isError={isError}
        content={<CardsSection occupations={occupations} />}
      />
      <SmartButton
        isFetching={isFetching}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
