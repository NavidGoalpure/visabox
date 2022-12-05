import styled from 'styled-components/macro';
import { useTranslation } from 'hooks/useTraslation';
import { componentStatements, PageKeys } from './const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { PageTitleStyle } from 'Styles/Theme/Page';
import { Button } from 'elements/Button';
import { useListData } from './useListData';
import { Loading } from 'elements/Loading';
import { useLastOccupationData } from './useLastOccupationData';

const Content: React.FC = () => {
  const { occupations, isFetching, fetchNextPage, isError } = useListData();
  const { lastOccupation } = useLastOccupationData();
  const { t } = useTranslation(componentStatements);
  const getSmartComponent = () => {
    if (isError) return <p>navid error</p>;
    return <CardsSection occupations={occupations} />;
  };
  const lastFechedOccupation =
    occupations?.pages?.[occupations?.pages.length - 1][
      occupations?.pages?.[occupations?.pages.length - 1].length - 1
    ];
  console.log('navid lastFechedOccupation=', lastOccupation);
  const hasNextPage =
    //@ts-ignore
    lastOccupation?.code || 1 > lastFechedOccupation?.code || 0;
  return (
    <>
      <PageTitle>{t(PageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search />
      {getSmartComponent()}
      {/* {hasNextPage?:null} */}
      {isFetching ? (
        <Loading />
      ) : (
        <Button onClick={() => fetchNextPage()}>Load More</Button>
      )}
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
