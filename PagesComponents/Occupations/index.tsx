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
import { ContentOrError } from './contentOrError';
import styled from 'styled-components/macro';
import { useState } from 'react';

const Content: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const [searchValue, setSearchValue] = useState<string>('');
  const { occupations, isFetching, fetchNextPage, isError } = useListData({
    search: searchValue,
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
  console.log('navid lastOccupation=', lastOccupation);
  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle />
      <Search searchValue={searchValue} setSearchValue={onChangeSearchValue} />
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
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
