import React from 'react';
import { Input } from '../../elements/Input';
import { Button } from 'elements/Button';
import styled from 'styled-components/macro';
import { CiSearch } from 'react-icons/ci';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { componentStatements, PageKeys } from './const';

function Search() {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <SearchElement
      icon={<SearchIcon />}
      placeholder={t(PageKeys.SearchPlaceHolder)}
      endElement={
        <Button style={{ width: 'auto' }}>{t(PageKeys.Search)}</Button>
      }
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
