import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Input } from 'Elements/Input';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { GoSettings } from 'react-icons/go';
import { PrimaryButton } from 'Elements/Button/Primary';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import * as MaraSelect from 'Elements/Select';
import { MAJOR_GROUP } from 'Consts/Occupations/anszco';
import { useLocale } from 'Hooks/useLocale';
import { FilteredRang } from './interfaces';
import { findFilterRangeForMajorGroup } from './utils';

interface Props {
  searchValue: string;
  setSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
  setFilterdCodes: Dispatch<SetStateAction<FilteredRang>>;
}
function Search({ searchValue, setSearchValue, setFilterdCodes }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [isShowPanel, setIsShowPanel] = useState<boolean>(false);

  return (
    <Container>
      <SearchElement
        value={searchValue}
        onChange={setSearchValue}
        icon={<SearchIcon />}
        placeholder={t(LanguageKeys.SearchPlaceHolder)}
        endElement={
          <PanelButton onClick={() => setIsShowPanel((prev) => !prev)}>
            <SettingIcon />
          </PanelButton>
        }
        isShowPanel={isShowPanel}
      />
      {isShowPanel && (
        <Panel>
          <SelectRoot
            triggerText='Major Group'
            onValueChange={(newValue) => {
              const filteredRange = findFilterRangeForMajorGroup({
                value: newValue,
                locale,
              });

              setFilterdCodes({
                highestNumber: filteredRange.highestNumber,
                lowerNumber: filteredRange.lowerNumber,
              });
            }}
          >
            {MAJOR_GROUP.map((item) => (
              <MaraSelect.Item
                value={item.title[locale] || ''}
                text={item.title[locale] || ''}
              />
            ))}
          </SelectRoot>
          <SelectRoot triggerText='Sub-Major Group' disabled={true}>
            {MAJOR_GROUP.map((item) => (
              <MaraSelect.Item
                value={item.title[locale] || ''}
                text={item.title[locale] || ''}
              />
            ))}
          </SelectRoot>
          <SelectRoot triggerText='Minor Group'>
            {MAJOR_GROUP.map((item) => (
              <MaraSelect.Item
                value={item.title[locale] || ''}
                text={item.title[locale] || ''}
              />
            ))}
          </SelectRoot>
          <SelectRoot triggerText='Unit Group'>
            {MAJOR_GROUP.map((item) => (
              <MaraSelect.Item
                value={item.title[locale] || ''}
                text={item.title[locale] || ''}
              />
            ))}
          </SelectRoot>
        </Panel>
      )}
    </Container>
  );
}

export default Search;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
`;
const SearchElement = styled(Input)<{ isShowPanel: boolean }>`
  margin: 0 auto;
  height: 4rem;
  transition: all 0.8s ease;
  #input-container {
    ${({ isShowPanel }) => isShowPanel && 'border-radius: 35px 35px 0 0'};
  }
`;
const SearchIcon = styled(CiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary4);
  margin-inline-end: 0.5rem;
`;
const PanelButton = styled(PrimaryButton)`
  border-radius: 50px;
  padding: 0;
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;
`;
const Panel = styled.div`
  ${layer2A_Bg}
  display:flex;
  justify-content: space-around;
  width: 100%;
  max-width: 865px;
  height: 4rem;
  border-radius: 0px 0px 30px 30px;
  width: 100%;
`;
const SettingIcon = styled(GoSettings)`
  width: 1.5rem;
  height: 1.5rem;
`;
const SelectRoot = styled(MaraSelect.Root)``;
