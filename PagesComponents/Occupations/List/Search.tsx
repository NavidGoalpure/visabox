import React, { useContext, useEffect, useState } from 'react';
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
import { SearchFilterContext } from './Context/SearchFilter';
import { deviceMin } from 'Consts/device';

interface Props {
  searchValue: string;
  setSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
}
function Search({ searchValue, setSearchValue }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [isShowPanel, setIsShowPanel] = useState<boolean>(false);
  const { setFiltersByValue, selectedFiltersObj, resetFilters, filteredList } =
    useContext(SearchFilterContext);
  useEffect(() => {
    resetFilters();
  }, [isShowPanel]);

  const submajorItems = filteredList?.subMajorGroup;
  const minorItems = filteredList?.minorGroup;
  return (
    <Container isShowPanel={isShowPanel}>
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
            <FilterTitle>{t(LanguageKeys.MajorGroup)}:</FilterTitle>
            <SelectRoot
              maxHeightInRem={20}
              triggerText={t(LanguageKeys.Select)}
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
            <FilterTitle>{t(LanguageKeys.SubMajorGroup)}:</FilterTitle>
            <SelectRoot
              maxHeightInRem={20}
              key={selectedFiltersObj?.anzcoGropup?.majorGroup?.code}
              triggerText={t(LanguageKeys.Select)}
              onValueChange={(newValue) => {
                setFiltersByValue({
                  filterKey: 'SUB_MAJOR_GROUP',
                  filterValue: newValue,
                  locale,
                });
              }}
              disabled={!selectedFiltersObj?.anzcoGropup?.majorGroup}
            >
              {submajorItems?.map((item: AnszcoGroup) => {
                return (
                  <MaraSelect.Item
                    key={item.code}
                    value={item.title[locale] || ''}
                    text={item.title[locale] || ''}
                  />
                );
              })}
            </SelectRoot>
          </FilterWrapper>
          <FilterWrapper>
            <FilterTitle>{t(LanguageKeys.MinorGroup)}:</FilterTitle>
            <SelectRoot
              maxHeightInRem={20}
              key={selectedFiltersObj?.anzcoGropup?.subMajorGroup?.code}
              triggerText={t(LanguageKeys.Select)}
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
const Container = styled.div<{ isShowPanel: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-bottom: 4rem;
  transition: all 0.3s ease;
  max-width: 865px;
  ${({ isShowPanel }) => isShowPanel && 'max-width: 100%;'}
`;
const SearchElement = styled(Input)<{ isShowPanel: boolean }>`
  margin: 0 auto;
  height: 4rem;

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
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
  width: 100%;
  min-height: 4rem;
  border-radius: 0px 0px 30px 30px;
  width: 100%;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media ${deviceMin.tabletS} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const FilterTitle = styled.h4`
  ${layer2A_Key}
  margin-inline-end: 0.5rem;
  @media ${deviceMin.tabletS} {
    margin-bottom: 0.5rem;
  }
`;
const SettingIcon = styled(GoSettings)`
  width: 1.5rem;
  height: 1.5rem;
`;
const SelectRoot = styled(MaraSelect.Root)``;
