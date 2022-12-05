import styled from 'styled-components/macro';
import { useTranslation } from 'hooks/useTraslation';
import { componentStatements, PageKeys } from './const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { Occupation } from 'interfaces/Documents/Occupation';
import { PageTitleStyle } from 'Styles/Theme/Page';
import { Button } from 'elements/Button';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from 'react-query';
import { useData } from './useData';
import { Loading } from 'elements/Loading';

// interface Props {
//   occupations: InfiniteData<Occupation[]> | undefined;
//   allOcupationsCount: number;
//   fetchNextPage: (
//     options?: FetchNextPageOptions | undefined
//   ) => Promise<InfiniteQueryObserverResult<Occupation[], Error>>;
// }
const Content: React.FC = () => {
  const { occupations, isFetching, fetchNextPage, isError, hasNextPage } =
    useData();
  const { t } = useTranslation(componentStatements);
  const getSmartComponent = () => {
    if (isFetching) return <Loading />;
    if (isError) return <p>navid error</p>;
    return <CardsSection occupations={occupations} />;
  };

  return (
    <>
      <PageTitle>{t(PageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search />
      {getSmartComponent()}
      {hasNextPage ? (
        <Button onClick={() => fetchNextPage()}>Load More</Button>
      ) : null}
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
