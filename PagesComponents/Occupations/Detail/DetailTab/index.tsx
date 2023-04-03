import {
  Territories,
  TerritorySection,
} from 'Interfaces/Occupation/occupation';
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
import styled from 'styled-components';

interface Props {
  territorySection: TerritorySection[];
}

const DetailComponent: React.FC<Props> = ({ territorySection }) => {
  const { isMobile } = useDevice();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      <Head>
        <script defer src='https://use.fontawesome.com/5f46793e2e.js'></script>
      </Head>
      <DetailTab
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
                  {isMobile ? (
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
const DetailTab = styled(Tab.Root)`
  margin: 0;
`;
