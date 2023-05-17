import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { useListData } from './useListData';
import { useLastOccupationData } from './useLastOccupationData';
import { getHasNextPage, getLastFetchedOccupation } from './utils';
import { SmartButton } from './SmartButton';
import { ContentOrError } from 'Components/contentOrError';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import NoData from 'Components/NoData';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { SearchFilterContext } from './Context/SearchFilter';

const Content: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const [searchValue, setSearchValue] = useState<string>('');
  const { filteredOccupationRange } = useContext(SearchFilterContext);

  //این هوکیه که لیست آکیوپیشن ها رو برمیگردونه
  const {
    occupations,
    isFetching,
    isRefetching,
    fetchNextPage,
    isError,
    refetch,
  } = useListData({
    search: searchValue,
    filteredOccupationRange,
  });

  const { lastOccupation } = useLastOccupationData(searchValue);
  //
  const lastFetchedOccupation = getLastFetchedOccupation(occupations);
  //
  const hasNextPage = getHasNextPage({ lastOccupation, lastFetchedOccupation });
  //
  const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  useEffect(() => {
    refetch();
  }, [filteredOccupationRange]);
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search searchValue={searchValue} setSearchValue={onChangeSearchValue} />
      {!occupations?.pages[0]?.length && !isFetching ? (
        <NoData hasIcon={false} themeLayer='1' />
      ) : (
        <>
          <ContentOrError
            isError={isError}
            content={<CardsSection occupations={occupations} />}
          />
          <SmartButton
            isError={isError}
            isFetching={isFetching || isRefetching}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
`;
