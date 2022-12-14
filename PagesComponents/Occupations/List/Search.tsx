import React from 'react';
import { Input } from 'Elements/Input';
import styled from 'styled-components/macro';
import { CiSearch } from 'react-icons/ci';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  searchValue: string;
  setSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
}
function Search({ searchValue, setSearchValue }: Props) {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <SearchElement
      value={searchValue}
      onChange={setSearchValue}
      icon={<SearchIcon />}
      placeholder={t(LanguageKeys.SearchPlaceHolder)}
      // endElement={
      //   <Button style={{ width: 'auto' }}>{t(LanguageKeys.Search)}</Button>
      // }
    />
  );
}

export default Search;
const SearchElement = styled(Input)`
  margin: 0 auto;
  margin-bottom: 4rem;
  height: 4rem;
`;
const SearchIcon = styled(CiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary4);
  margin-inline-end: 0.5rem;
`;
