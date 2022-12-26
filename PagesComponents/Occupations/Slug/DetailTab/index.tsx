import { Occupation, Territories } from 'Interfaces/Documents/occupation';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { ScrollBox } from 'Elements/ScrollBox';
import { getHtml_decsBaseOnAbv } from './utils';
import Head from 'next/head';
import useDevice from 'Hooks/useDevice';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { Details, NoMobile } from './styledComponents';

interface Props {
  occupation: Occupation;
}

const DetailComponent: React.FC<Props> = ({ occupation }) => {
  const { isLaptop } = useDevice();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      {!isLaptop ? (
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/solid.css'
            crossOrigin='anonymous'
          />
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
          !isLaptop ? (
            <NoMobile>{t(LanguageKeys.NoMobile)}</NoMobile>
          ) : (
            <ScrollBox heightToRem={40}>
              {getTerritories().map((territory) => {
                const html = getHtml_decsBaseOnAbv({
                  territorySection: occupation.territory_section,
                  currentTerritoryAbv: territory,
                });
                return (
                  <RadixTab.Content key={territory} value={territory}>
                    <Details dangerouslySetInnerHTML={{ __html: html }} />
                  </RadixTab.Content>
                );
              })}
            </ScrollBox>
          )
        }
      />
    </>
  );
};

export default DetailComponent;
