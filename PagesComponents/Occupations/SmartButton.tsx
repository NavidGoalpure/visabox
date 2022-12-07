import { Button } from 'elements/Button';
import { Loading } from 'elements/Loading';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { Occupation } from 'interfaces/Documents/Occupation';
import React from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  isFetching: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Occupation[], Error>>;
}
export const SmartButton: React.FC<Props> = ({
  isFetching,
  hasNextPage,
  fetchNextPage,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  if (isFetching) return <Loading />;
  if (hasNextPage)
    return (
      <Button style={{ margin: '0 auto' }} onClick={() => fetchNextPage()}>
        {t(LanguageKeys.LoadMore)}
      </Button>
    );
  return null;
};
