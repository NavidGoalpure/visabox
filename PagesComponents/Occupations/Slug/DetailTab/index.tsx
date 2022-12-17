import {
  Occupation,
  Territories,
  TerritorySection,
} from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { ScrollBox } from 'Elements/ScrollBox';
import { Territory } from 'Interfaces/Documents/territory';
import { getHtml_decsBaseOnAbv } from './utils';
import { actDetail } from './testdata';

interface Props {
  occupation: Occupation;
}

const DetailComponent: React.FC<Props> = ({ occupation }) => {
  return (
    <Tab.Root
      defaultValue={Territories.ACT}
      items={
        <>
          {getTerritories().map((territory) => (
            <Tab.Item key={territory} title={territory} value={territory} />
          ))}
        </>
      }
      bodies={
        <ScrollBox heightToRem={40}>
          {getTerritories().map((territory) => {
            const html = getHtml_decsBaseOnAbv({
              territorySection: occupation.territory_section,
              currentTerritoryAbv: territory,
            });
            return (
              <RadixTab.Content key={territory} value={territory}>
                {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
                <div dangerouslySetInnerHTML={{ __html: actDetail }} />
              </RadixTab.Content>
            );
          })}
        </ScrollBox>
      }
    />
  );
};

export default DetailComponent;
