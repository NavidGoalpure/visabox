import { Territories, TerritorySection } from 'Interfaces/Documents/occupation';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { getHtml_decsBaseOnAbv } from './utils';
import Head from 'next/head';
import useDevice from 'Hooks/useDevice';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { Details, NoMobile } from './styledComponents';

interface Props {
  territorySection: TerritorySection[];
}

const DetailComponent: React.FC<Props> = ({ territorySection }) => {
  const { isLaptop } = useDevice();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      {isLaptop ? (
        <Head>
          <script src='https://use.fontawesome.com/5f46793e2e.js'></script>
        </Head>
      ) : null}
      <Tab.Root
        defaultValue={Territories.ACT}
        heads={
          <>
            {getTerritories().map((territory) => (
              <Tab.Item key={territory} title={territory} value={territory} />
            ))}
          </>
        }
        bodies={
          <>
            {getTerritories().map((territory) => {
              const html = getHtml_decsBaseOnAbv({
                territorySection: territorySection,
                currentTerritoryAbv: territory,
              });
              return (
                <RadixTab.Content key={territory} value={territory}>
                  {!isLaptop ? (
                    <NoMobile>{t(LanguageKeys.NoMobile)}</NoMobile>
                  ) : null}
                  <Details dangerouslySetInnerHTML={{ __html: html }} />
                </RadixTab.Content>
              );
            })}
          </>
        }
      />
    </>
  );
};

export default DetailComponent;
