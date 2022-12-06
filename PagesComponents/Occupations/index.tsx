import styled from 'styled-components/macro';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { PageTitleStyle } from 'Styles/Theme/Page';
import { Button } from 'elements/Button';
import { useListData } from './useListData';
import { Loading } from 'elements/Loading';
import { useLastOccupationData } from './useLastOccupationData';
import { getHasNextPage } from './utils';
import { ReactNode } from 'react';

const Content: React.FC = () => {
  const { occupations, isFetching, fetchNextPage, isError } = useListData();
  const { lastOccupation } = useLastOccupationData();
  const { t } = useStaticTranslation(componentStatements);
  const getSmartComponent = () => {
    if (isError) return <p>navid error</p>;
    return <CardsSection occupations={occupations} />;
  };
  const lastFechedOccupation =
    occupations?.pages?.[occupations?.pages.length - 1][
      occupations?.pages?.[occupations?.pages.length - 1].length - 1
    ];
  const hasNextPage = getHasNextPage({ lastOccupation, lastFechedOccupation });
  const getSmartButtonComponent = (): ReactNode => {
    if (isFetching) return <Loading />;
    if (hasNextPage)
      return (
        <Button style={{ margin: '0 auto' }} onClick={() => fetchNextPage()}>
          {t(LanguageKeys.LoadMore)}
        </Button>
      );
    return null;
  };
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search />
      {getSmartComponent()}
      {getSmartButtonComponent()}
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
