import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import CardsSection from './CardsSection';
import Search from './Search';

import { getHasNextPage, getLastFetchedAgent } from './utils';
import { SmartButton } from './SmartButton';
import { ContentOrError } from 'Components/contentOrError';
import styled from 'styled-components';
import { useContext, useEffect, useRef } from 'react';
import NoData from 'Components/NoData';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { SearchFilterContext } from './Context/SearchFilter';
import { useLastAgentData } from './useLastAgentData';

const Content: React.FC = () => {
  const isMounted = useRef(false);
  const { t } = useStaticTranslation(componentStatements);
  const { selectedFiltersObj } = useContext(SearchFilterContext);

  //این هوکیه که لیست ایجنت ها رو برمیگردونه
  const {
    agents,
    isFetching,
    isRefetching,
    fetchNextPage,
    isError,
    refetch,
    remove,
    //
    searchValue,
    setSearchValue,
  } = useContext(SearchFilterContext);

  const { lastAgent } = useLastAgentData(searchValue);
  //
  const lastFetchedAgent = getLastFetchedAgent(agents);
  //
  const hasNextPage = getHasNextPage({ lastAgent, lastFetchedAgent });
  //
  const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  //////////useEffects////////////
  useEffect(() => {
    if (selectedFiltersObj?.location) remove();
  }, [selectedFiltersObj.location]);
  //
  // useEffect(() => {
  //   if (isMounted.current) {
  //     refetch();
  //   } else {
  //     // This block will run on the initial mount
  //     isMounted.current = true;
  //   }
  // }, [selectedFiltersObj.location]);

  return (
    <>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <Subtitle>{t(LanguageKeys.PageSubtitle)}</Subtitle>
      <Search searchValue={searchValue} setSearchValue={onChangeSearchValue} />
      {!agents?.pages[0]?.length && !isFetching ? (
        <NoData hasIcon={false} themeLayer='1' />
      ) : (
        <>
          <ContentOrError
            isError={isError}
            content={<CardsSection agents={agents} />}
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
const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
`;
