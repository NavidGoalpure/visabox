import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Input } from 'Elements/Input';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { GoSettings } from 'react-icons/go';
import { PrimaryButton } from 'Elements/Button/Primary';
import { layer2A_Bg, layer2A_Key } from 'Styles/Theme/Layers/layer2/theme';
import * as MaraSelect from 'Elements/Select';
import { AnszcoGroup, MAJOR_GROUP } from 'Consts/Occupations/anszco';
import { useLocale } from 'Hooks/useLocale';
import { FilteredOccupationRange } from './interfaces';
import useFilters from './Hooks/useFilterSearch';

interface Props {
  searchValue: string;
  setSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
  setFilterOccupationRange: Dispatch<SetStateAction<FilteredOccupationRange>>;
}
function Search({
  searchValue,
  setSearchValue,
  setFilterOccupationRange,
}: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [isShowPanel, setIsShowPanel] = useState<boolean>(false);
  const { setFiltersByValue, selectedFiltersObj, filteredList } = useFilters({
    setFilterOccupationRange,
  });

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
          <FilterWrapper>
            <FilterTitle>Major-Group:</FilterTitle>
            <SelectRoot
              triggerText='Select a Major-Group ...'
              onValueChange={(newValue) => {
                setFiltersByValue({
                  filterKey: 'MAJOR_GROUP',
                  filterValue: newValue,
                  locale,
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
          </FilterWrapper>
          <FilterWrapper>
            <FilterTitle>Sub Major Group:</FilterTitle>
            <SelectRoot
              triggerText='Select a Sub-Major Group ...'
              onValueChange={(newValue) => {
                setFiltersByValue({
                  filterKey: 'SUB_MAJOR_GROUP',
                  filterValue: newValue,
                  locale,
                });
              }}
              disabled={!selectedFiltersObj?.anzcoGropup?.majorGroup}
            >
              {filteredList?.subMajorGroup?.map((item: AnszcoGroup) => (
                <MaraSelect.Item
                  key={item.code}
                  value={item.title[locale] || ''}
                  text={item.title[locale] || ''}
                />
              ))}
            </SelectRoot>
          </FilterWrapper>
          <FilterWrapper>
            <FilterTitle>Minor Group:</FilterTitle>
            <SelectRoot
              triggerText='Select a Minor Group ...'
              disabled={!selectedFiltersObj?.anzcoGropup?.subMajorGroup}
              onValueChange={(newValue) => {
                setFiltersByValue({
                  filterKey: 'MINOR_GROUP',
                  filterValue: newValue,
                  locale,
                });
              }}
            >
              {filteredList?.minorGroup?.map((item: AnszcoGroup) => (
                <MaraSelect.Item
                  key={item.code}
                  value={item.title[locale] || ''}
                  text={item.title[locale] || ''}
                />
              ))}
            </SelectRoot>
          </FilterWrapper>
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
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  width: 100%;
  max-width: 865px;
  border-radius: 0px 0px 30px 30px;
  width: 100%;
`;
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  margin-bottom: 0.5rem;
`;
const FilterTitle = styled.h4`
  ${layer2A_Key}
  margin-inline-end: 0.5rem;
`;
const SettingIcon = styled(GoSettings)`
  width: 1.5rem;
  height: 1.5rem;
`;
const SelectRoot = styled(MaraSelect.Root)``;
