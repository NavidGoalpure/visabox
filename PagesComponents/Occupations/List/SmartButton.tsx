import { ClientError } from '@sanity/client';
import { PrimaryButton } from 'Elements/Button/Primary';
import { Loading } from 'Elements/Loading';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import React, { useRef } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  isError: boolean;
  isFetching: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Occupation[], ClientError>>;
}
export const SmartButton: React.FC<Props> = ({
  isError,
  isFetching,
  hasNextPage,
  fetchNextPage,
}) => {
  const { t } = useStaticTranslation(componentStatements);

  if (isError) return null;
  if (isFetching) return <Loading />;
  if (hasNextPage)
    return (
      <PrimaryButton
        style={{ margin: '0 auto' }}
        onClick={() => fetchNextPage()}
      >
        {t(LanguageKeys.LoadMore)}
      </PrimaryButton>
    );
  return null;
};
