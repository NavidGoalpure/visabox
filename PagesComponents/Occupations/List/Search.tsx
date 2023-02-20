import React, { useState } from 'react';
import { Input } from 'Elements/Input';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { GoSettings } from 'react-icons/go';
import { SmartButton } from './SmartButton';
import { PrimaryButton } from 'Elements/Button/Primary';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
interface Props {
  searchValue: string;
  setSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
}
function Search({ searchValue, setSearchValue }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const [isShowPanel, setIsShowPanel] = useState<boolean>(false);
  return (
    <Container>
      <SearchElement
        value={searchValue}
        onChange={setSearchValue}
        icon={<SearchIcon />}
        placeholder={t(LanguageKeys.SearchPlaceHolder)}
        endElement={
          <AdvanceSearch>
            <GoSettings />
          </AdvanceSearch>
        }
        isShowPanel={isShowPanel}
      />
      {isShowPanel && <Panel />}
    </Container>
  );
}

export default Search;
const Container = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;
const SearchElement = styled(Input)<{ isShowPanel: boolean }>`
  margin: 0 auto;
  height: 4rem;
`;
const SearchIcon = styled(CiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary4);
  margin-inline-end: 0.5rem;
`;
const AdvanceSearch = styled(PrimaryButton)`
  border-radius: 50px;
  padding: 0;
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;
`;
const Panel = styled.div`
  ${layer2A_Bg}
  height: 4rem;
  border-radius: 0px 0px 30px 30px;
  width: 100%;
`;
