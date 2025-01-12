import React, { useContext, useEffect, useState } from 'react';
import { SearchInput } from 'Elements/SearchInput/input';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import { PrimaryButton } from 'Elements/Button/Primary';
import { layer2A_Bg, layer2A_Key } from 'Styles/Theme/Layers/layer2/theme';
import * as MaraSelect from 'Elements/Select';
import { SearchFilterContext } from '../Context/SearchFilter';
import { deviceMin } from 'Consts/device';

import { LuSettings2 } from 'react-icons/lu';
import { Country, State } from 'country-state-city';
import { useRouter } from 'next/router';
import { getDefaultCountry } from 'Utils/country-state-city';

interface Props {
  searchValue: string;
  setSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
}

const allCountries = Country.getAllCountries();
function Search({ searchValue, setSearchValue }: Props) {
  // get Url Params
  const router = useRouter();
  const countryInUrlParam = router?.query?.country?.toString();
  const stateInUrlParam = router?.query?.state?.toString();

  ///
  const { t } = useStaticTranslation(componentStatements);
  const [isShowPanel, setIsShowPanel] = useState<boolean>(true);
  const { selectedFiltersObj, setSelectedFiltersObj, resetFilters } =
    useContext(SearchFilterContext);
  useEffect(() => {
    resetFilters();
  }, [isShowPanel]);
  const smartCountryCode =
    selectedFiltersObj?.location?.country?.isoCode || countryInUrlParam;
  const allStates = State.getStatesOfCountry(smartCountryCode);

  //////////////////////////////////////////////////////////////
  //این یوزافکت به یوآرال پارام کشور نگاه میکنه و اگه مقدار داشته باشن فیلتر سرچ رو با اون هماهنگ میکنه
  /////////////////////////////////////////////////////////////
  useEffect(() => {
    const setCountry = async () => {
      if (countryInUrlParam) {
        const country = getDefaultCountry({
          countryInUrlParam,
        });
        setSelectedFiltersObj((prev) => ({
          ...prev,
          location: {
            ...prev.location,
            country,
          },
        }));
      }
    };

    setCountry();
  }, [countryInUrlParam]);

  //////////////////////////////////////////////////////////////
  //این یوزافکت به یوآرال پارام شهر نگاه میکنه و اگه مقدار داشته باشه فیلتر سرچ رو با اون هماهنگ میکنه
  /////////////////////////////////////////////////////////////
  useEffect(() => {
    if (stateInUrlParam) {
      setSelectedFiltersObj((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          state: stateInUrlParam,
        },
      }));
    }
  }, [stateInUrlParam]);
  //
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
          <FilterContainer>
            <FilterWrapper>
              <FilterTitle>{t(LanguageKeys.Country)}:</FilterTitle>

              <SelectRoot
                maxHeightInRem={20}
                value={selectedFiltersObj?.location?.country?.isoCode}
                triggerProps={{ placeholder: t(LanguageKeys.Select) }}
                onValueChange={(newCountry) => {
                  const countryObj = Country.getCountryByCode(newCountry);
                  setSelectedFiltersObj({
                    location: { country: countryObj },
                  });
                }}
              >
                {allCountries?.map((country) => (
                  <MaraSelect.Item
                    key={country?.isoCode}
                    value={country?.isoCode}
                    text={country?.name || ''}
                  />
                ))}
              </SelectRoot>
            </FilterWrapper>
            {/* ///////State///////// */}
            {allStates?.length > 0 && (
              <FilterWrapper>
                <FilterTitle>{t(LanguageKeys.State)}:</FilterTitle>

                <SelectRoot
                  maxHeightInRem={20}
                  defaultValue={
                    countryInUrlParam && stateInUrlParam
                      ? stateInUrlParam
                      : undefined
                  }
                  triggerProps={{ placeholder: t(LanguageKeys.Select) }}
                  onValueChange={(newState) => {
                    setSelectedFiltersObj({
                      location: {
                        ...selectedFiltersObj?.location,
                        state: newState,
                      },
                    });
                  }}
                >
                  {allStates?.map((state) => (
                    <MaraSelect.Item
                      key={state?.isoCode}
                      value={state?.name || ''}
                      text={state?.name || ''}
                    />
                  ))}
                </SelectRoot>
              </FilterWrapper>
            )}
          </FilterContainer>
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
const SearchElement = styled(SearchInput)<{ isShowPanel: boolean }>`
  margin: 0 auto;
  height: 4rem;
  #input-container {
    ${({ isShowPanel }) => isShowPanel && 'border-radius: 16px 16px 0 0'};
  }
`;
const SearchIcon = styled(CiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary4);
  margin-inline-end: 0.5rem;
`;
const PanelButton = styled(PrimaryButton)`
  border-radius: 0.5rem;
  padding: 0;
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;
`;

const Panel = styled.div`
  ${layer2A_Bg};
  padding: 1rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
  width: 100%;
  height: auto;
  min-height: 4rem;
  border-radius: 0px 0px 16px 16px;
  width: 100%;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  align-items: flex-start;
  justify-content: baseline;
`;
const FilterTitle = styled.h4`
  ${layer2A_Key}
  margin-inline-end: 0.5rem;
  flex-shrink: 0;
  @media ${deviceMin.tabletS} {
    margin-bottom: 0.25rem;
  }
`;
const SettingIcon = styled(LuSettings2)`
  width: 1.5rem;
  height: 1.5rem;
`;
const SelectRoot = styled(MaraSelect.Root)`
  #select-portal {
    height: 35rem !important;
  }
`;
