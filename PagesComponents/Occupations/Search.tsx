import React from 'react';
import { Input } from '../../elements/Input';
import { Button } from 'elements/Button';
import styled from 'styled-components/macro';
import { CiSearch } from 'react-icons/ci';
import { useTranslation } from 'hooks/useTraslation';
import { componentStatements, PageKeys } from './Const';

function Search() {
  const { t } = useTranslation(componentStatements);

  return (
    <SearchElement
      icon={<SearchIcon />}
      placeholder={t(PageKeys.SearchPlaceHolder)}
      endElement={<Button>{t(PageKeys.Search)}</Button>}
    />
  );
}

export default Search;
const SearchElement = styled(Input)`
  margin: 0 auto;
  margin-bottom: 4rem;
`;
const SearchIcon = styled(CiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary4);
`;
