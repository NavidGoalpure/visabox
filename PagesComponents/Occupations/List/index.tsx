import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
  LanguageKeys,
} from './const';
import CardsSection from './CardsSection';
import Search from './Search';
import { PageSubtitle } from './PageSubtitle';
import { useListData } from './useListData';
import { useLastOccupationData } from './useLastOccupationData';
import { getHasNextPage, getLastFechedOccupation } from './utils';
import { SmartButton } from './SmartButton';
import { ContentOrError } from 'Components/contentOrError';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import NoData from 'Components/NoData';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import useFilterSearch from './Hooks/useFilterSearch';
import { FilteredOccupationRange } from './interfaces';

const Content: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOccupationRange, setFilterOccupationRange] =
    useState<FilteredOccupationRange>({
      lowerNumber: 0,
      highestNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
    });

  //این هوکیه که لیست آکیوپیشن ها رو برمیگردونه
  const { occupations, isFetching, fetchNextPage, isError, refetch } =
    useListData({
      search: searchValue,
      filteredOccupationRange,
    });

  const { lastOccupation } = useLastOccupationData(searchValue);
  //
  const lastFechedOccupation = getLastFechedOccupation(occupations);
  //
  const hasNextPage = getHasNextPage({ lastOccupation, lastFechedOccupation });
  //
  const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  useEffect(() => {
    refetch();
  }, [filteredOccupationRange.highestNumber]);
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search
        searchValue={searchValue}
        setSearchValue={onChangeSearchValue}
        setFilterOccupationRange={setFilterOccupationRange}
      />
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
            isFetching={isFetching}
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
