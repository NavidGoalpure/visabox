import {
  Occupation,
  Territories,
  TerritorySection,
} from 'Interfaces/Documents/occupation';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { VerticalScrollBox } from 'Elements/VerticalScrollBox';
import { getHtml_decsBaseOnAbv } from './utils';
import Head from 'next/head';
import useDevice from 'Hooks/useDevice';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { Details, NoMobile } from './styledComponents';
import { testOccupation } from 'Mock/occupation';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';

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
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
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
            <>
              {getTerritories().map((territory) => {
                const html = getHtml_decsBaseOnAbv({
                  territorySection: territorySection,
                  currentTerritoryAbv: territory,
                });
                return (
                  <RadixTab.Content key={territory} value={territory}>
                    <Details dangerouslySetInnerHTML={{ __html: html }} />
                  </RadixTab.Content>
                );
              })}
            </>
          )
        }
      />
    </>
  );
};

export default DetailComponent;
